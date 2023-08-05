# IPget
A online API for getting the client's IP Address.
## How to use
You can use IPget by sending a post request to https://ipget.fifly.org/api and the response is in the form of JSON. It will contain this:
```json
{
    "success": <true/false>,
    "error": <none if success/error message if failed>,
    "ip": <IP Address in string form>
}
```