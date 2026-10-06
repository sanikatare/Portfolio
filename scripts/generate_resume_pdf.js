import fs from 'node:fs'
import path from 'node:path'
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib'

async function generateResume() {
  const doc = await PDFDocument.create()
  const page = doc.addPage([612, 792]) // Standard US Letter
  const { width, height } = page.getSize()

  const helvetica = await doc.embedFont(StandardFonts.Helvetica)
  const helveticaBold = await doc.embedFont(StandardFonts.HelveticaBold)
  const helveticaOblique = await doc.embedFont(StandardFonts.HelveticaOblique)

  const marginX = 40
  const contentWidth = width - marginX * 2
  let y = height - 36

  // Helper for text
  function drawText(text, x, curY, options = {}) {
    const font = options.font || helvetica
    const size = options.size || 8.5
    const color = options.color || rgb(0, 0, 0)
    page.drawText(text, { x, y: curY, size, font, color })
  }

  function drawCenteredText(text, curY, options = {}) {
    const font = options.font || helvetica
    const size = options.size || 8.5
    const textWidth = font.widthOfTextAtSize(text, size)
    const x = (width - textWidth) / 2
    drawText(text, x, curY, options)
  }

  function drawLine(curY) {
    page.drawLine({
      start: { x: marginX, y: curY },
      end: { x: width - marginX, y: curY },
      thickness: 0.6,
      color: rgb(0.1, 0.1, 0.1),
    })
  }

  function drawSectionHeader(title) {
    y -= 11
    drawText(title, marginX, y, { font: helveticaBold, size: 9.5 })
    y -= 3
    drawLine(y)
    y -= 8
  }

  function drawParagraph(text, font = helvetica, size = 8.2, lineHeight = 10.2) {
    const words = text.split(' ')
    let line = ''
    for (const word of words) {
      const testLine = line ? `${line} ${word}` : word
      const testWidth = font.widthOfTextAtSize(testLine, size)
      if (testWidth > contentWidth) {
        drawText(line, marginX, y, { font, size })
        y -= lineHeight
        line = word
      } else {
        line = testLine
      }
    }
    if (line) {
      drawText(line, marginX, y, { font, size })
      y -= lineHeight
    }
  }

  function drawBullet(text, font = helvetica, size = 8.1, lineHeight = 10.1, indent = 12) {
    const bulletSymbol = '•'
    drawText(bulletSymbol, marginX + 2, y, { font: helveticaBold, size })
    
    const availableWidth = contentWidth - indent
    const words = text.split(' ')
    let line = ''
    for (const word of words) {
      const testLine = line ? `${line} ${word}` : word
      const testWidth = font.widthOfTextAtSize(testLine, size)
      if (testWidth > availableWidth) {
        drawText(line, marginX + indent, y, { font, size })
        y -= lineHeight
        line = word
      } else {
        line = testLine
      }
    }
    if (line) {
      drawText(line, marginX + indent, y, { font, size })
      y -= lineHeight
    }
  }

  // HEADER
  drawCenteredText('SANIKA TARE', y, { font: helveticaBold, size: 16 })
  y -= 13
  drawCenteredText('AI SOFTWARE ENGINEER', y, { font: helveticaBold, size: 9.5 })
  y -= 11
  drawCenteredText('Pune, Maharashtra, India  |  +91-7249255572  |  sanikatare.work@gmail.com', y, { size: 8.2 })
  y -= 10
  drawCenteredText('github.com/sanikatare  |  linkedin.com/in/sanikatare  |  portfolio-three-bay-okimzvh4sn.vercel.app', y, { size: 8.2 })
  y -= 4

  // PROFESSIONAL SUMMARY
  drawSectionHeader('PROFESSIONAL SUMMARY')
  drawParagraph(
    'Results-driven Software Engineer and Computer Engineering student (B.E., 2027) who builds sustainable, efficient web applications with exceptional user interfaces. Strong in full-stack development, system design, and data-driven problem solving, with measurable results across an industry internship and two benchmarked projects. Collaborative leader who takes ownership and delivers reliable, user-focused solutions.',
    helvetica,
    8.1,
    9.8
  )

  // TECHNICAL SKILLS
  drawSectionHeader('TECHNICAL SKILLS')
  const skills = [
    { label: 'Languages: ', items: 'Python, JavaScript, TypeScript, Java, C, C++, SQL' },
    { label: 'AI/ML: ', items: 'Machine Learning, Deep Learning, NLP, Transformers, XGBoost, Predictive Analytics, Feature Engineering, SHAP, Prompt Engineering' },
    { label: 'GenAI & RAG: ', items: 'LLMs, RAG, AI Agents, Multi-Agent Systems, LangChain, FAISS, BM25, ChromaDB, Embeddings, Hybrid Search, Reranking, Gemini' },
    { label: 'Backend: ', items: 'FastAPI, Node.js, Express.js, REST APIs, Microservices, JWT, RBAC, SQLAlchemy, Pydantic' },
    { label: 'Frontend & UI: ', items: 'React.js, React 19, TypeScript, HTML5, CSS3, Tailwind CSS, Vite, Recharts, Responsive Design' },
    { label: 'Databases & Cloud: ', items: 'PostgreSQL, MongoDB, pgvector, AWS, Docker, Docker Compose, Nginx' },
    { label: 'CS Fundamentals: ', items: 'DSA, OOP, DBMS, Operating Systems, Computer Networks, Distributed Systems, System Design' },
    { label: 'Leadership & Soft Skills: ', items: 'Team Leadership, Collaboration, Technical Communication, Ownership, Problem Solving' },
  ]

  for (const s of skills) {
    const words = s.items.split(' ')
    const labelWidth = helveticaBold.widthOfTextAtSize(s.label, 8.1)
    
    // Check if line fits in single line or wraps
    const fullWidth = labelWidth + helvetica.widthOfTextAtSize(s.items, 8.1)
    if (fullWidth <= contentWidth) {
      drawText(s.label, marginX, y, { font: helveticaBold, size: 8.1 })
      drawText(s.items, marginX + labelWidth, y, { font: helvetica, size: 8.1 })
      y -= 9.8
    } else {
      // First line starts with label
      drawText(s.label, marginX, y, { font: helveticaBold, size: 8.1 })
      let curX = marginX + labelWidth
      let line = ''
      for (const word of words) {
        const testLine = line ? `${line} ${word}` : word
        const testWidth = helvetica.widthOfTextAtSize(testLine, 8.1)
        if (curX + testWidth > marginX + contentWidth) {
          drawText(line, curX, y, { font: helvetica, size: 8.1 })
          y -= 9.8
          line = word
          curX = marginX
        } else {
          line = testLine
        }
      }
      if (line) {
        drawText(line, curX, y, { font: helvetica, size: 8.1 })
        y -= 9.8
      }
    }
  }

  // EXPERIENCE
  drawSectionHeader('EXPERIENCE')
  // Experience item header
  drawText('Tata Technologies', marginX, y, { font: helveticaBold, size: 8.5 })
  const expTitle = ' — AI/ML Engineering Intern, Vehicle IQ Digital Twin | Pune, India'
  const ttWidth = helveticaBold.widthOfTextAtSize('Tata Technologies', 8.5)
  drawText(expTitle, marginX + ttWidth, y, { font: helvetica, size: 8.5 })
  const dateStr = 'June 2026 – August 2026'
  const dateWidth = helveticaBold.widthOfTextAtSize(dateStr, 8.5)
  drawText(dateStr, width - marginX - dateWidth, y, { font: helveticaBold, size: 8.5 })
  y -= 9.5

  drawText('Python | XGBoost | SHAP | FastAPI | React 19 | LangChain | ChromaDB | Gemini | RAG | Docker | Nginx', marginX, y, { font: helveticaOblique, size: 7.9 })
  y -= 9.5

  const expBullets = [
    'Developed an AI Vehicle Digital Twin for health monitoring, predictive maintenance, OBD-II diagnostics, and trip intelligence.',
    'Unified 8 automotive data sources into a 70,000-row, 209-feature dataset for health analysis and failure prediction.',
    'Built an XGBoost failure classifier (0.998 ROC-AUC, 99.4% recall) and Remaining Useful Life (RUL) estimation.',
    'Applied SHAP to identify torque, rotational speed, and tool wear as key failure drivers.',
    'Designed 8 independent FastAPI services with a React 19 dashboard, containerized with Docker Compose and Nginx.',
    'Implemented a LangChain, ChromaDB, and Gemini RAG pipeline for document-grounded diagnostic guidance.',
    'Delivered trip intelligence combining vehicle health, route, weather, and fuel data into travel advisories.',
  ]
  for (const b of expBullets) {
    drawBullet(b, helvetica, 8.0, 9.6, 10)
  }

  // PROJECTS
  drawSectionHeader('PROJECTS')
  // Project 1: HomeIQ
  drawText('HomeIQ', marginX, y, { font: helveticaBold, size: 8.5 })
  const hiqTitle = ' — Multi-Agent AI Home Intelligence Platform'
  const hiqWidth = helveticaBold.widthOfTextAtSize('HomeIQ', 8.5)
  drawText(hiqTitle, marginX + hiqWidth, y, { font: helvetica, size: 8.5 })
  y -= 9.2

  drawText('Python | FastAPI | PostgreSQL | pgvector | LangChain | Gemini | BioBERT | RAG | Docker', marginX, y, { font: helveticaOblique, size: 7.9 })
  y -= 9.2

  const homeIqBullets = [
    'Built a multi-agent platform with 8 domain agents (Kitchen, Laundry, Maintenance, Finance, Vehicles, Documents, Health, Travel) and tool-based workflows.',
    'Delivered document intelligence: 100% classification and extraction F1 on a 12-document benchmark.',
    'Designed grounded RAG with 100% citation correctness and 0% hallucination across 8 domain queries.',
    'Developed biomedical NLP reaching 99.7% biomarker F1, 98.9% PubMedQA accuracy, and 99.4% interaction F1.',
    'Verified 100% agent routing, 100% Human-in-the-Loop policy enforcement, zero cross-tenant leakage, 20/20 tables.',
  ]
  for (const b of homeIqBullets) {
    drawBullet(b, helvetica, 8.0, 9.6, 10)
  }
  y -= 2

  // Project 2: VedaWise
  drawText('VedaWise', marginX, y, { font: helveticaBold, size: 8.5 })
  const vwTitle = ' — Explainable RAG & Knowledge Retrieval System'
  const vwWidth = helveticaBold.widthOfTextAtSize('VedaWise', 8.5)
  drawText(vwTitle, marginX + vwWidth, y, { font: helvetica, size: 8.5 })
  y -= 9.2

  drawText('Python | FAISS | BM25 | RRF | Transformers | Reranking | RAG | LLMs', marginX, y, { font: helveticaOblique, size: 7.9 })
  y -= 9.2

  const vedaBullets = [
    'Architected an explainable RAG system over 10,546 verses using BM25, 384-dim embeddings, FAISS, RRF, reranking, and evidence filtering.',
    'Improved retrieval on a 92-question benchmark to 90% Recall@10, 0.7838 MRR, and 0.7120 nDCG@5.',
    'Implemented citation verification and abstention: 100% citation precision and abstention accuracy.',
    'Reached 93.75% answer correctness at 115.7 ms average query latency while enforcing evidence boundaries.',
  ]
  for (const b of vedaBullets) {
    drawBullet(b, helvetica, 8.0, 9.6, 10)
  }

  // ACHIEVEMENTS
  drawSectionHeader('ACHIEVEMENTS')
  const achievements = [
    'Filed a patent for an ML-based predictive Li-Fi/Wi-Fi handover system using smartphone motion sensors.',
    'Presented AI/ML predictive-systems research at KSHITIJ 2026.',
  ]
  for (const a of achievements) {
    drawBullet(a, helvetica, 8.0, 9.6, 10)
  }

  // EDUCATION
  drawSectionHeader('EDUCATION')
  drawText('Pimpri Chinchwad College of Engineering | Pune, Maharashtra', marginX, y, { font: helveticaBold, size: 8.3 })
  const eduDate = '2023 – 2027 (Expected)'
  const eduDateWidth = helveticaBold.widthOfTextAtSize(eduDate, 8.3)
  drawText(eduDate, width - marginX - eduDateWidth, y, { font: helveticaBold, size: 8.3 })
  y -= 9.5
  drawText('Bachelor of Engineering in Computer Engineering | Coursework: AI, ML, DSA, DBMS, Networks, Distributed Systems', marginX, y, { font: helvetica, size: 8.0 })
  y -= 6

  // CERTIFICATIONS
  drawSectionHeader('CERTIFICATIONS')
  const certs = [
    'Databricks — Generative AI Fundamentals',
    'AWS — Cloud Practitioner Essentials',
    'The AI Engineer Course — Bootcamp',
    'AICTE — Generative AI Virtual Internship',
    'Data Structures using C and C++',
    'IIT Guwahati — Summer Analytics',
  ]
  for (const c of certs) {
    drawBullet(c, helvetica, 8.0, 9.5, 10)
  }

  const pdfBytes = await doc.save()
  const publicDir = path.resolve(process.cwd(), 'public')
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true })
  }
  const outputPath = path.join(publicDir, 'sanika_tare_resume.pdf')
  const outputPathCapital = path.join(publicDir, 'Sanika_Tare_Resume.pdf')
  fs.writeFileSync(outputPath, pdfBytes)
  fs.writeFileSync(outputPathCapital, pdfBytes)
  console.log(`Generated ${outputPath} and ${outputPathCapital} successfully (${pdfBytes.length} bytes), ending y=${y}`)
}

generateResume().catch(console.error)
