import re, sys
sys.path.insert(0, '.')
files = {
    'src/pages/EnvironmentalArt.tsx': 'environmental-art',
    'src/pages/ProductDesign.tsx': 'product-design',
    'src/pages/TourismManagement.tsx': 'tourism-management',
    'src/pages/HotelManagement.tsx': 'hotel-management',
    'src/pages/BroadcastingHosting.tsx': 'broadcasting-hosting',
    'src/pages/PerformingArts.tsx': 'performing-arts',
}
for filename, key in files.items():
    with open(filename, 'r') as f:
        content = f.read()
    # Fix: add useState/type imports, replace simple news with dual-mode
    if 'import { useState }' not in content:
        content = content.replace(
            'import { motion } from "framer-motion";',
            'import { useState } from "react";\nimport { motion, AnimatePresence } from "framer-motion";\nimport { LayoutList, LayoutGrid } from "lucide-react";'
        )
        content = content.replace(
            'export default function',
            'type ViewMode = "card" | "list";\n\nexport default function'
        )
        content = content.replace(
            f"export default function {filename.replace('.tsx','')}() {{\n",
            f"export default function {filename.replace('.tsx','')}() {{\n  const [viewMode, setViewMode] = useState<ViewMode>(\"list\");\n  const items = majorNews[\"{key}\"];\n"
        )
    print(f'Fixed: {filename}')
