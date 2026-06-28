import re

def convert_html_to_jsx(html):
    # Basic replacements
    jsx = html.replace('class=', 'className=')
    jsx = jsx.replace('for=', 'htmlFor=')
    jsx = jsx.replace('<!--', '{/*')
    jsx = jsx.replace('-->', '*/}')
    
    # Self-closing tags (basic handling for this specific file)
    tags_to_close = ['img', 'input', 'br', 'hr', 'link', 'meta']
    for tag in tags_to_close:
        # Regex to find unclosed tags and add trailing slash
        # E.g., <img src="..." alt="..."> to <img src="..." alt="..." />
        pattern = re.compile(r'<(%s\b[^>]*?)(?<!/)>' % tag, re.IGNORECASE)
        jsx = pattern.sub(r'<\1 />', jsx)
        
    # Inline styles (style="...")
    def style_replacer(match):
        style_str = match.group(1)
        # Parse style_str (e.g. "text-align: center; margin-top: 8px; color:rgb(2, 166, 70); ;")
        rules = style_str.split(';')
        style_obj = []
        for rule in rules:
            if not rule.strip(): continue
            parts = rule.split(':', 1)
            if len(parts) == 2:
                key = parts[0].strip()
                val = parts[1].strip()
                # camelCase key
                parts = key.split('-')
                camel_key = parts[0] + ''.join(p.capitalize() for p in parts[1:])
                style_obj.append(f"{camel_key}: '{val}'")
        
        return "style={{" + ", ".join(style_obj) + "}}"

    jsx = re.sub(r'style="([^"]*)"', style_replacer, jsx)
    
    return jsx

with open('original_index.html', 'r', encoding='utf-16') as f:
    html = f.read()

# Extract body content (between <body> and </body>, excluding scripts)
body_start = html.find('<body>') + 6
body_end = html.find('<!-- Javascript -->')
if body_end == -1:
    body_end = html.find('</body>')

body_content = html[body_start:body_end]

jsx_content = convert_html_to_jsx(body_content)

# Read script.js content
with open('script.js', 'r', encoding='utf-8') as f:
    script_content = f.read()

# Create App.jsx
app_template = f"""import React, {{ useEffect }} from 'react';

function App() {{
  useEffect(() => {{
    // Original script.js logic wrapped in a timeout to ensure DOM is fully rendered
    const timer = setTimeout(() => {{
        {script_content}
    }}, 100);
    
    return () => clearTimeout(timer);
  }}, []);

  return (
    <>
      {jsx_content}
    </>
  );
}}

export default App;
"""

with open('src/App.jsx', 'w', encoding='utf-8') as f:
    f.write(app_template)

print("App.jsx created successfully.")
