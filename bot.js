const { default: makeWASocket, useMultiFileAuthState } = require("@whiskeysockets/baileys")
const qrcode = require("qrcode-terminal")

async function connectBot() {
    const { state, saveCreds } = await useMultiFileAuthState("auth_info")

    const sock = makeWASocket({
        auth: state,
        syncFullHistory: true, // 🔑 ajuda a baixar histórico + chaves de grupo
    })

    sock.ev.on("creds.update", saveCreds)

    sock.ev.on("connection.update", (update) => {
        const { connection, lastDisconnect, qr } = update

        if (qr) {
            console.log("📱 Escaneie este QR para conectar:")
            qrcode.generate(qr, { small: true })
        }

        if (connection === "open") {
            console.log("✅ Bot conectado com sucesso!")
        } else if (connection === "close") {
            console.log("❌ Conexão fechada, tentando reconectar...")
            connectBot()
        }
    })

    sock.ev.on("messages.upsert", async (m) => {
        try {
            const msg = m.messages[0]
            if (!msg.message) return

            const from = msg.key.remoteJid
            const sender = msg.key.participant || msg.key.remoteJid
            const text =
                msg.message.conversation ||
                msg.message.extendedTextMessage?.text ||
                ""

            console.log("📩 Mensagem recebida:", text, "de:", sender)

            // comando !ping
            if (text === "!ping") {
                await sock.sendMessage(from, { text: "pong 🏓" })
            }

            // comando !marcar (apenas ADM ou número fixo)
            if (text === "!marcar" && from.endsWith("@g.us")) {
                const metadata = await sock.groupMetadata(from)
                const participantes = metadata.participants.map((p) => p.id)

                // checar se é admin
                const participante = metadata.participants.find((p) => p.id === sender)
                const isAdmin = participante?.admin !== null && participante?.admin !== undefined

                // checar se é o número fixo
                const isNumeroFixo = sender.includes("556184381185") // Brasil = 55 + DDD 61 + número

                if (isAdmin || isNumeroFixo) {
                    await sock.sendMessage(from, {
                        text: "✅ Marcando todos Participantes do grupo: ",
                        mentions: participantes,
                    })
                } else {
                    await sock.sendMessage(from, {
                        text: "❌ Apenas administradores ou o número autorizado podem usar este comando.",
                    })
                }
            }
        } catch (err) {
            console.log("⚠️ Erro ao processar mensagem:", err.message)
        }
    })
}

connectBot()
