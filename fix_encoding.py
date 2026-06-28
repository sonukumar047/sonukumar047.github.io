import codecs

with codecs.open('src/App.jsx', 'r', 'utf-8') as f:
    content = f.read()

replacements = {
    'ΓÇÖ': "'",
    'ΓÇö': '—',
    '≡ƒñû': '🤖',
    '≡ƒÿä': '😄',
    '≡ƒÆ╗': '💻',
    'Γ¥ñ': '❤️',
    '├ù': '×',
    '┬⌐': '©',
    '≡ƒÆÖ': '💙'
}

for bad, good in replacements.items():
    content = content.replace(bad, good)

with codecs.open('src/App.jsx', 'w', 'utf-8') as f:
    f.write(content)

print("Encodings fixed.")
