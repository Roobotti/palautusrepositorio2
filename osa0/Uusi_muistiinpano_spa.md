'''mermaid
sequenceDiagram
    	participant browser
    	participant server

    	browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa	
	Note right of browser: Payload: {"content": "Cha cha cha!","date": "2023-05-17T08:58:45.296Z"}	
	activate server
    	server-->>browser: 201
    	deactivate server
	
	Note right of browser: The browser executes the callback function that renders the notes
'''
