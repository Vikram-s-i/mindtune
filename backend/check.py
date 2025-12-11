import google.generativeai as genai

# Replace with your API key
genai.configure(api_key="AIzaSyDhj64qm1YP8geVxvbI2460_CNy-tJBst8")

# List all available models
models = genai.list_models()

for m in models:
    print(f"ID: {m.name}")
    print(f"Supported: {m.supported_generation_methods}")
    print("-" * 40)
