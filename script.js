:root {
    --primary: #1e3a8a;
    --primary-light: #eff6ff;
    --accent: #2563eb;
    --bg: #f8fafc;
    --card-bg: #ffffff;
    --text: #1e293b;
    --border: #e2e8f0;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, sans-serif;
}

body {
    background-color: var(--bg);
    color: var(--text);
    padding: 2rem 1rem;
}

.container {
    max-width: 1100px;
    margin: 0 auto;
}

header {
    text-align: center;
    margin-bottom: 2rem;
}

header h1 {
    color: var(--primary);
    font-size: 2rem;
    margin-bottom: 0.5rem;
}

header p {
    color: #64748b;
}

.calculator-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
    margin-bottom: 2.5rem;
}

.card {
    background: var(--card-bg);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 1.5rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

.card h2 {
    font-size: 1.1rem;
    color: var(--primary);
    margin-bottom: 1rem;
    border-bottom: 2px solid var(--primary-light);
    padding-bottom: 0.5rem;
}

.input-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1.2rem;
}

.input-group label {
    font-weight: 600;
    font-size: 0.9rem;
}

.input-group input {
    padding: 0.6rem;
    border: 1px solid var(--border);
    border-radius: 6px;
    font-size: 1rem;
    outline: none;
    transition: border-color 0.2s;
}

.input-group input:focus {
    border-color: var(--accent);
}

.result-box {
    background-color: var(--primary-light);
    padding: 0.8rem;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.result-box p {
    display: flex;
    justify-content: space-between;
    font-size: 0.9rem;
}

.result-box strong {
    color: var(--primary);
}

.summary-section {
    background: var(--card-bg);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 1.5rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
    overflow-x: auto;
}

.summary-section h2 {
    font-size: 1.3rem;
    color: var(--primary);
    margin-bottom: 1rem;
}

table {
    width: 100%;
    border-collapse: collapse;
    text-align: left;
}

th, td {
    padding: 0.8rem 1rem;
    border-bottom: 1px solid var(--border);
}

th {
    background-color: #f1f5f9;
    font-weight: 600;
}

tfoot tr th {
    background-color: #e2e8f0;
    font-size: 1rem;
}
