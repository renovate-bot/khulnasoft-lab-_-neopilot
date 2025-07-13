import logging
from os import getenv

from neopilot import Sandbox

NEOPILOT_API_KEY = getenv("NEOPILOT_API_KEY")

# Global logging configuration
logging.basicConfig(level=logging.INFO, format="GLOBAL - [%(asctime)s] - %(name)-32s - %(levelname)7s: %(message)s",
                    datefmt="%Y-%m-%d %H:%M:%S")  # $HighlightLine

# Or configure only neopilot logger

# Get neopilot logger
neopilot_logger = logging.getLogger("neopilot")  # $HighlightLine

# Set neopilot logger level to INFO
neopilot_logger.setLevel(logging.INFO)  # $HighlightLine

# Setup formatter
formatter = logging.Formatter("NEOPILOT    - [%(asctime)s] - %(name)-32s - %(levelname)7s: %(message)s",
                              datefmt="%Y-%m-%d %H:%M:%S")

# Setup handler
handler = logging.StreamHandler()
handler.setFormatter(formatter)

# Add handler to neopilot logger
neopilot_logger.addHandler(handler)  # $HighlightLine


def main():
    sandbox = Sandbox(template="base", api_key=NEOPILOT_API_KEY)
    sandbox.filesystem.write("test.txt", "Hello World")
    sandbox.close()


main()
