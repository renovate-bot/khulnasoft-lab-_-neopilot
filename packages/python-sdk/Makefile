generate-api:
	python ./../../spec/remove_extra_tags.py sandboxes
	openapi-python-client generate --output-path neopilot/api/api --overwrite --path ../../spec/openapi_generated.yml
	rm -rf neopilot/api/client
	mv neopilot/api/api/neopilot_api_client neopilot/api/client
	rm -rf neopilot/api/api

init:
	pip install openapi-python-client

lint:
	ruff check .
