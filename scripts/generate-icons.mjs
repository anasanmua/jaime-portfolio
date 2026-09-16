import { writeFileSync } from "node:fs"
import sharp from "sharp"

// JRG badge favicon — matches the site: dark bg (#030304), teal (#00a9b3),
// clip-notch cut corners (top-right, bottom-left) like the header logo.
const BG = "#030304"
const PRIMARY = "#00a9b3"

function iconSvg(size, opts = {}) {
  const { cut, fontSize, borderW = 0 } = opts
  const b = Math.ceil(borderW / 2) + 2 // keep stroke fully inside the icon
  const path = `M ${b} ${b} L ${size - cut - b} ${b} L ${size - b} ${cut + b} L ${size - b} ${size - b} L ${cut + b} ${size - b} L ${b} ${size - cut - b} Z`
  const border = borderW
    ? `<path d="${path}" fill="none" stroke="${PRIMARY}" stroke-opacity="0.6" stroke-width="${borderW}"/>`
    : ""
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <path d="${path}" fill="${BG}"/>
  ${border}
  <text x="50%" y="50%" dy="0.35em" text-anchor="middle" fill="${PRIMARY}" font-family="Chakra Petch, sans-serif" font-weight="700" font-size="${fontSize}" letter-spacing="1">JRG</text>
</svg>`
}

// 180x180 (apple icon + icon.svg)
const big = iconSvg(180, { cut: 16, fontSize: 78, borderW: 6 })
// 32x32
const small = iconSvg(32, { cut: 3, fontSize: 15 })

writeFileSync("public/icon.svg", big)
await sharp(Buffer.from(big)).resize(180, 180).png().toFile("public/apple-icon.png")
await sharp(Buffer.from(small)).resize(32, 32).png().toFile("public/icon-light-32x32.png")
await sharp(Buffer.from(small)).resize(32, 32).png().toFile("public/icon-dark-32x32.png")
console.log("icons written to public/")
