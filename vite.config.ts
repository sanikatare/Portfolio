import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'
import fs from 'node:fs'
import path from 'node:path'

function avatarUploadPlugin(): Plugin {
  return {
    name: 'avatar-upload-plugin',
    configureServer(server) {
      server.middlewares.use('/api/upload-avatar', (req, res) => {
        if (req.method === 'POST') {
          const chunks: Buffer[] = []
          req.on('data', (chunk) => chunks.push(chunk))
          req.on('end', () => {
            try {
              const rawBuffer = Buffer.concat(chunks)
              const asString = rawBuffer.toString('utf8')
              let imageBuffer = rawBuffer
              if (asString.startsWith('data:image/') && asString.includes(';base64,')) {
                fs.writeFileSync('/tmp/sanika_avatar.b64', asString, 'utf8')
                const base64Part = asString.split(';base64,')[1]
                imageBuffer = Buffer.from(base64Part, 'base64')
              }
              const publicDir = path.resolve(process.cwd(), 'public')
              if (!fs.existsSync(publicDir)) {
                fs.mkdirSync(publicDir, { recursive: true })
              }
              fs.writeFileSync(path.join(publicDir, 'me.png'), imageBuffer)
              fs.writeFileSync('/tmp/sanika_photo.png', imageBuffer)
              res.writeHead(200, { 'Content-Type': 'application/json' })
              res.end(JSON.stringify({ success: true, url: '/me.png?t=' + Date.now() }))
            } catch (err) {
              res.writeHead(500, { 'Content-Type': 'application/json' })
              res.end(JSON.stringify({ error: String(err) }))
            }
          })
        } else {
          res.writeHead(405)
          res.end()
        }
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), avatarUploadPlugin()],
  server: {
    host: '0.0.0.0',
    port: 3000,
    allowedHosts: true,
  },
})
