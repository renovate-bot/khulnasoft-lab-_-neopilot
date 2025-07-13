from neopilot import Sandbox

sandbox = Sandbox(template="base")

with open("path/to/local/file", "rb") as f:
    remote_path = sandbox.upload_file(f)  # $HighlightLine

sandbox.close()
