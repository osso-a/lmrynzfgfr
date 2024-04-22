var allAvailableServers = 5,
    versionScript = "4.2.5",
    customAfkMsg = [
        "转圈圈",
        "转圈圈喽~",
        "骨碌碌~",
        "Wakey wakey",
        "Stop afk when",
        "Jew is comming!",
        "An Ultra Shiny Ladybug has spawned!",
        "A Super Bubble has spawned!",
        "Sleep is for the weak",
        "FIRE IN THE HOLE!"
    ],
    serverSwitcherPosition = "-100px",
    customBackground = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB3aWR0aD0iMjU2IgogICBoZWlnaHQ9IjI1NiIKICAgdmlld0JveD0iMCAwIDI1NiAyNTYiCiAgIHZlcnNpb249IjEuMSIKICAgaWQ9InN2ZzMzOTIiCiAgIGlua3NjYXBlOnZlcnNpb249IjEuMSAoYzY4ZTIyYzM4NywgMjAyMS0wNS0yMykiCiAgIHNvZGlwb2RpOmRvY25hbWU9IlNld2VyVGV4dHVyZTAxLnN2ZyIKICAgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiCiAgIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8c29kaXBvZGk6bmFtZWR2aWV3CiAgICAgaWQ9Im5hbWVkdmlldzMzOTQiCiAgICAgcGFnZWNvbG9yPSIjZmZmZmZmIgogICAgIGJvcmRlcmNvbG9yPSIjNjY2NjY2IgogICAgIGJvcmRlcm9wYWNpdHk9IjEuMCIKICAgICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIgogICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiCiAgICAgaW5rc2NhcGU6cGFnZWNoZWNrZXJib2FyZD0iMCIKICAgICBpbmtzY2FwZTpkb2N1bWVudC11bml0cz0icHgiCiAgICAgc2hvd2dyaWQ9ImZhbHNlIgogICAgIHVuaXRzPSJweCIKICAgICB3aWR0aD0iMjU2cHgiCiAgICAgc2hvd2JvcmRlcj0idHJ1ZSIKICAgICBpbmtzY2FwZTpzaG93cGFnZXNoYWRvdz0iZmFsc2UiCiAgICAgaW5rc2NhcGU6em9vbT0iMiIKICAgICBpbmtzY2FwZTpjeD0iMTEyIgogICAgIGlua3NjYXBlOmN5PSIxNDcuMjUiCiAgICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxMzY2IgogICAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjcxNSIKICAgICBpbmtzY2FwZTp3aW5kb3cteD0iLTgiCiAgICAgaW5rc2NhcGU6d2luZG93LXk9Ii04IgogICAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiCiAgICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ic3ZnMzM5MiIKICAgICBpbmtzY2FwZTpzbmFwLWdsb2JhbD0idHJ1ZSIKICAgICBpbmtzY2FwZTpzbmFwLWJib3g9ImZhbHNlIgogICAgIGlua3NjYXBlOmJib3gtcGF0aHM9InRydWUiCiAgICAgaW5rc2NhcGU6YmJveC1ub2Rlcz0idHJ1ZSIKICAgICBpbmtzY2FwZTpzbmFwLW5vZGVzPSJmYWxzZSIgLz4KICA8ZGVmcwogICAgIGlkPSJkZWZzMzM4OSIgLz4KICA8cGF0aAogICAgIGlkPSJyZWN0NzUwNDkiCiAgICAgc3R5bGU9ImZpbGw6IzRkNGQ0MTtzdHJva2Utd2lkdGg6MztzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQiCiAgICAgZD0iTSAwLDAgSCAyNTYgViAyNTYgSCAwIFoiIC8+CiAgPHBhdGgKICAgICBpZD0icmVjdDc1MDUxIgogICAgIHN0eWxlPSJmaWxsOiM2ODY4NTk7c3Ryb2tlOiM2ODY4NTk7c3Ryb2tlLXdpZHRoOjU7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kIgogICAgIGQ9Ik0gNS4wOTQzNTI3LDUuMDk0MzUzMiBIIDQ4LjkwNTc4OCBWIDM3LjAxODk2NyBIIDUuMDk0MzUyNyBaIiAvPgogIDxwYXRoCiAgICAgaWQ9InJlY3Q3NTA1MyIKICAgICBzdHlsZT0iZmlsbDojNjg2ODU5O3N0cm9rZTojNjg2ODU5O3N0cm9rZS13aWR0aDo1O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZCIKICAgICBkPSJNIDUuMDk0MzUyNywyMTguNzE3NTEgSCA2MS44Njk3NTUgdiAzMS45MjQ2MSBIIDUuMDk0MzUyNyBaIiAvPgogIDxwYXRoCiAgICAgaWQ9InJlY3Q3NTA1NSIKICAgICBzdHlsZT0iZmlsbDojNjg2ODU5O3N0cm9rZTojNjg2ODU5O3N0cm9rZS13aWR0aDo1O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZCIKICAgICBkPSJNIDUuMDk0MzUyNywxNzUuOTkyODkgSCAzNS45MzM1NDIgViAyMDcuOTE3NSBIIDUuMDk0MzUyNyBaIiAvPgogIDxwYXRoCiAgICAgaWQ9InJlY3Q3NTA1NyIKICAgICBzdHlsZT0iZmlsbDojNWU1ZTRmO3N0cm9rZTojNWU1ZTRmO3N0cm9rZS13aWR0aDo1O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZCIKICAgICBkPSJNIDUuMDk0MzUyNywxMzMuMjY4MjYgSCA3NS43OTg0NTQgdiAzMS45MjQ2MSBIIDUuMDk0MzUyNyBaIiAvPgogIDxwYXRoCiAgICAgaWQ9InBhdGg3NTA1OSIKICAgICBzdHlsZT0iZmlsbDojNGQ0ZDQxO3N0cm9rZTojNGQ0ZDQxO3N0cm9rZS13aWR0aDo1O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZCIKICAgICBpbmtzY2FwZTp0cmFuc2Zvcm0tY2VudGVyLXg9IjAuNTE0NjIyMDYiCiAgICAgaW5rc2NhcGU6dHJhbnNmb3JtLWNlbnRlci15PSIwLjc2OTE5NDg1IgogICAgIGQ9Im0gODEuNTg2MDkyLDEzNC41MjI2MSAtMTMuNjg2MTY3LDcuNTIzNjggLTExLjM4NDcwNywtMTAuNjkxMzcgNi42NTAwMzEsLTE0LjEzMTMyIDE1LjQ5NDY1MiwxLjk1Nzc0IHoiIC8+CiAgPHBhdGgKICAgICBpZD0icmVjdDc1MDYxIgogICAgIHN0eWxlPSJmaWxsOiM2ODY4NTk7c3Ryb2tlOiM2ODY4NTk7c3Ryb2tlLXdpZHRoOjU7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kIgogICAgIGQ9Ik0gNS4wOTQzNTI3LDkwLjU0MzYzMyBIIDUyLjI2Mzc1MiBWIDEyMi40NjgyNSBIIDUuMDk0MzUyNyBaIiAvPgogIDxwYXRoCiAgICAgaWQ9InJlY3Q3NTA2MyIKICAgICBzdHlsZT0iZmlsbDojNjg2ODU5O3N0cm9rZTojNjg2ODU5O3N0cm9rZS13aWR0aDo1O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZCIKICAgICBkPSJNIDUuMDk0MzUyNyw0Ny44MTg5OTMgSCA2NC43NTE1NTMgViA3OS43NDM2MDcgSCA1LjA5NDM1MjcgWiIgLz4KICA8cGF0aAogICAgIGlkPSJyZWN0NzUwNjUiCiAgICAgc3R5bGU9ImZpbGw6IzVlNWU0ZjtzdHJva2U6IzVlNWU0ZjtzdHJva2Utd2lkdGg6NTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQiCiAgICAgZD0ibSAxOTMuMjQ1NzYsNS4wOTQzNTMyIGggNTcuNzM2IFYgMzcuMDE4OTY1IGggLTU3LjczNiB6IiAvPgogIDxwYXRoCiAgICAgaWQ9InBhdGg3NTA2NyIKICAgICBzdHlsZT0iZmlsbDojNGQ0ZDQxO3N0cm9rZTojNGQ0ZDQxO3N0cm9rZS13aWR0aDo1O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZCIKICAgICBpbmtzY2FwZTp0cmFuc2Zvcm0tY2VudGVyLXg9IjAuNTE0NjIyMDYiCiAgICAgaW5rc2NhcGU6dHJhbnNmb3JtLWNlbnRlci15PSIwLjc2OTE5NDg1IgogICAgIGQ9Im0gMjAyLjU4NjA5LDQ3LjAyMjYwMyAtMTMuNjg2MTYsNy41MjM2ODUgLTExLjM4NDcxLC0xMC42OTEzNzIgNi42NTAwMywtMTQuMTMxMzE1IDE1LjQ5NDY1LDEuOTU3NzM4IHoiIC8+CiAgPHBhdGgKICAgICBpZD0icmVjdDc1MDY5IgogICAgIHN0eWxlPSJmaWxsOiM2ODY4NTk7c3Ryb2tlOiM2ODY4NTk7c3Ryb2tlLXdpZHRoOjU7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kIgogICAgIGQ9Im0gMTkzLjI0NTc5LDIxOC43MTc1MSBoIDU3LjczNiB2IDMxLjkyNDYyIGggLTU3LjczNiB6IiAvPgogIDxwYXRoCiAgICAgaWQ9InJlY3Q3NTA3MSIKICAgICBzdHlsZT0iZmlsbDojNjg2ODU5O3N0cm9rZTojNjg2ODU5O3N0cm9rZS13aWR0aDo1O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZCIKICAgICBkPSJNIDU5LjQzNDExMyw1LjA5NDM1MzIgSCAxMjguMzc3NjkgViAzNy4wMTg5NjcgSCA1OS40MzQxMTMgWiIgLz4KICA8cGF0aAogICAgIGlkPSJyZWN0NzUwNzMiCiAgICAgc3R5bGU9ImZpbGw6IzY4Njg1OTtzdHJva2U6IzY4Njg1OTtzdHJva2Utd2lkdGg6NTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQiCiAgICAgZD0ibSAxMzguOTA2MDEsNS4wOTQzNTMyIGggNDMuODExNDMgViAzNy4wMTg5NjcgaCAtNDMuODExNDMgeiIgLz4KICA8cGF0aAogICAgIGlkPSJyZWN0NzUwNzUiCiAgICAgc3R5bGU9ImZpbGw6IzY4Njg1OTtzdHJva2U6IzY4Njg1OTtzdHJva2Utd2lkdGg6NTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQiCiAgICAgZD0ibSAxMjcuMDQ1MjgsMjE4LjcxNzUxIGggNTUuOTk2NjYgdiAzMS45MjQ2MSBoIC01NS45OTY2NiB6IiAvPgogIDxwYXRoCiAgICAgaWQ9InJlY3Q3NTA3NyIKICAgICBzdHlsZT0iZmlsbDojNjg2ODU5O3N0cm9rZTojNjg2ODU5O3N0cm9rZS13aWR0aDo1O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZCIKICAgICBkPSJtIDcyLjA3MzU3LDIxOC43MTc1MSBoIDQ0Ljc2Nzg5IHYgMzEuOTI0NjEgSCA3Mi4wNzM1NyBaIiAvPgogIDxwYXRoCiAgICAgaWQ9InBhdGg3NTA3OSIKICAgICBzdHlsZT0iZmlsbDojNGQ0ZDQxO3N0cm9rZTojNGQ0ZDQxO3N0cm9rZS13aWR0aDo1O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZCIKICAgICBpbmtzY2FwZTp0cmFuc2Zvcm0tY2VudGVyLXg9Ii0wLjY2NDczMTQ5IgogICAgIGlua3NjYXBlOnRyYW5zZm9ybS1jZW50ZXIteT0iMC4xNTQ1MDg1IgogICAgIGQ9Im0gMTE1LjI1LDIxMi43NSAtNi4zNDg4OCw3LjczODQ5IC05LjMyMTY1NywtMy42NDY4MiAwLjU4Nzc4NywtOS45OTIzNSA5LjY4NDkyLC0yLjUyODc5IHoiIC8+CiAgPHBhdGgKICAgICBpZD0icmVjdDc1MDgxIgogICAgIHN0eWxlPSJmaWxsOiM2ODY4NTk7c3Ryb2tlOiM2ODY4NTk7c3Ryb2tlLXdpZHRoOjU7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kIgogICAgIGQ9Ik0gNDUuODc3NzgxLDE3NS45OTI4OSBIIDExMi4yNTkxOCBWIDIwNy45MTc1IEggNDUuODc3NzgxIFoiIC8+CiAgPHBhdGgKICAgICBpZD0icmVjdDc1MDgzIgogICAgIHN0eWxlPSJmaWxsOiM1ZTVlNGY7c3Ryb2tlOiM1ZTVlNGY7c3Ryb2tlLXdpZHRoOjU7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kIgogICAgIGQ9Im0gMTIyLjIwMzQyLDE3NS45OTI4OSBoIDU0LjM3MzkxIHYgMzEuOTI0NjEgaCAtNTQuMzczOTEgeiIgLz4KICA8cGF0aAogICAgIGlkPSJyZWN0NzUwODUiCiAgICAgc3R5bGU9ImZpbGw6IzY4Njg1OTtzdHJva2U6IzY4Njg1OTtzdHJva2Utd2lkdGg6NTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQiCiAgICAgZD0ibSAxODYuNTIxNTgsMTc1Ljk5Mjg5IGggNjQuNDYwMiB2IDMxLjkyNDYxIGggLTY0LjQ2MDIgeiIgLz4KICA8cGF0aAogICAgIGlkPSJyZWN0NzUwODciCiAgICAgc3R5bGU9ImZpbGw6IzY4Njg1OTtzdHJva2U6IzY4Njg1OTtzdHJva2Utd2lkdGg6NTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQiCiAgICAgZD0iTSA4Ni4yMjI5OTIsMTMzLjI2ODI2IEggMTU1LjAwNTkgdiAzMS45MjQ2MSBIIDg2LjIyMjk5MiBaIiAvPgogIDxwYXRoCiAgICAgaWQ9InJlY3Q3NTA4OSIKICAgICBzdHlsZT0iZmlsbDojNjg2ODU5O3N0cm9rZTojNjg2ODU5O3N0cm9rZS13aWR0aDo1O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZCIKICAgICBkPSJtIDIwOS41NzU5NywxMzMuMjY4MjYgaCA0MS40MDU4IHYgMzEuOTI0NjEgaCAtNDEuNDA1OCB6IiAvPgogIDxwYXRoCiAgICAgaWQ9InJlY3Q3NTA5MSIKICAgICBzdHlsZT0iZmlsbDojNjg2ODU5O3N0cm9rZTojNjg2ODU5O3N0cm9rZS13aWR0aDo1O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZCIKICAgICBkPSJNIDYyLjY4ODI4Miw5MC41NDM2MzMgSCAxMjIuMzQ1NDkgViAxMjIuNDY4MjUgSCA2Mi42ODgyODIgWiIgLz4KICA8cGF0aAogICAgIGlkPSJyZWN0NzUwOTMiCiAgICAgc3R5bGU9ImZpbGw6IzY4Njg1OTtzdHJva2U6IzY4Njg1OTtzdHJva2Utd2lkdGg6NTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQiCiAgICAgZD0ibSAxMzIuNzcwMDIsOTAuNTQzNjMzIGggNzEuMTg0NDIgdiAzMS45MjQ2MTcgaCAtNzEuMTg0NDIgeiIgLz4KICA8cGF0aAogICAgIGlkPSJyZWN0NzUwOTUiCiAgICAgc3R5bGU9ImZpbGw6IzVlNWU0ZjtzdHJva2U6IzVlNWU0ZjtzdHJva2Utd2lkdGg6NTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQiCiAgICAgZD0ibSAyMTQuMzc4OTcsOTAuNTQzNjMzIGggMzYuNjAyODEgdiAzMS45MjQ2MTcgaCAtMzYuNjAyODEgeiIgLz4KICA8cGF0aAogICAgIGlkPSJyZWN0NzUwOTciCiAgICAgc3R5bGU9ImZpbGw6IzVlNWU0ZjtzdHJva2U6IzVlNWU0ZjtzdHJva2Utd2lkdGg6NTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQiCiAgICAgZD0iTSA3NS4xNzYxMDIsNDcuODE4OTkzIEggMTE4LjUwMzA5IFYgNzkuNzQzNjA3IEggNzUuMTc2MTAyIFoiIC8+CiAgPHBhdGgKICAgICBpZD0icmVjdDc1MDk5IgogICAgIHN0eWxlPSJmaWxsOiM2ODY4NTk7c3Ryb2tlOiM2ODY4NTk7c3Ryb2tlLXdpZHRoOjU7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kIgogICAgIGQ9Im0gMTI4LjkyNzY0LDQ3LjgxODk5MyBoIDM1LjE2MTg5IHYgMzEuOTI0NjE0IGggLTM1LjE2MTg5IHoiIC8+CiAgPHBhdGgKICAgICBpZD0icmVjdDc1MTAxIgogICAgIHN0eWxlPSJmaWxsOiM2ODY4NTk7c3Ryb2tlOiM2ODY4NTk7c3Ryb2tlLXdpZHRoOjU7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kIgogICAgIGQ9Im0gMTc0LjUxNDA3LDQ3LjgxODk5MyBoIDc2LjQ2NzcyIHYgMzEuOTI0NjE0IGggLTc2LjQ2NzcyIHoiIC8+CiAgPHBhdGgKICAgICBpZD0icmVjdDc1MTAzIgogICAgIHN0eWxlPSJmaWxsOiM2ODY4NTk7c3Ryb2tlOiM2ODY4NTk7c3Ryb2tlLXdpZHRoOjU7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kIgogICAgIGQ9Im0gMTY1LjQzMDQ0LDEzMy4yNjgyNiBoIDMzLjcyMSB2IDMxLjkyNDYxIGggLTMzLjcyMSB6IiAvPgo8L3N2Zz4K",
    allAvailableSpawnpoint = [
        "Centralia",
        "Ellne"
    ],
    currentSpawnpointSet = "?",
    uniqueSpawnMessages = {
        "Cactus": "A tower of thorns rises from the sands...",
        "Hel Beetle": "You sense ominous vibrations coming from a different realm...",
        "Jellyfish": "You hear lightning strikes coming from a far distance...",
        "Rock": "Something mountain-like appears in the distance...",
        "Hornet": "A big yellow spot shows up in the distance...",
        "Fly": "A buzzing noise echoes through the sewer tunnels",
        "Firefly": "There's a bright light in the horizon..."
    },
    discordRoleIdsArr = {
        Ultra: "<@&1197850018862878771>",
        Super: "<@&1197849443135913984>",
        Craft: "<@&1197869192767078532>",
        Reporter: "<@&1197952578634395728>",
        "Bee": "<@&1197850098588209213>",
        "Bumble Bee": "<@&1197850118347567124>",
        "Ant Hole": "<@&1197850138174050426>",
        "Fire Ant Burrow": "<@&1197850222756380682>",
        "Termite Mound": "<@&1197850242729656330>",
        "Shiny Ladybug": "<@&1197850046864031825>",
        "Digger": "<@&1197870731325886546>",
        "Sponge": "<@&1197872853073276968>"
    },
    ultraMobSpawns = {
        "Bee": {
            longName: "Bee",
            holeEnterMsg: false,
            role: function() { return discordRoleIdsArr[this.longName] },
            maps: [
                "Centralia Fields 1",
                "Centralia Fields 2",
                "Centralia Fields 3",
                "Centralia Fields 5",
                "Centralia Fields 6",
                "Centralia Maze"
            ]
        },
        "Ant Hole": {
            longName: "Ant Hole",
            holeEnterMsg: false,
            role: function() { return discordRoleIdsArr[this.longName] },
            maps: [
                "Centralia Fields 1",
                "Centralia Fields 2",
                "Centralia Fields 3",
                "Centralia Fields 5",
                "Centralia Fields 6",
                "Centralia Maze"
            ]
        },
        "Queen Ant": {
            longName: "Ant Hole",
            holeEnterMsg: true,
            role: function() { return discordRoleIdsArr[this.longName] },
            maps: [
                "Centralia Fields 1",
                "Centralia Fields 2",
                "Centralia Fields 3",
                "Centralia Fields 5",
                "Centralia Fields 6",
                "Centralia Maze"
            ]
        },
        "Termite Mound": {
            longName: "Termite Mound",
            holeEnterMsg: false,
            role: function() { return discordRoleIdsArr[this.longName] },
            maps: [
                "Ellne",
                "Ellne Jungle 1",
                "Ellne Jungle 2",
                "Ellne Jungle 3",
                "Ellne Jungle 4",
                "Ellne Jungle 5"
            ]
        },
        "Termite Overmind": {
            longName: "Termite Mound",
            holeEnterMsg: true,
            role: function() { return discordRoleIdsArr[this.longName] },
            maps: [
                "Ellne",
                "Ellne Jungle 1",
                "Ellne Jungle 2",
                "Ellne Jungle 3",
                "Ellne Jungle 4",
                "Ellne Jungle 5"
            ]
        },
        "Fire Ant Burrow": {
            longName: "Fire Ant Burrow",
            holeEnterMsg: false,
            role: function() { return discordRoleIdsArr[this.longName] },
            maps: [
                "South Desert 1",
                "South Desert 2",
                "South Desert 4"
            ]
        },
        "Soldier Fire Ant": {
            longName: "Fire Ant Burrow",
            holeEnterMsg: true,
            role: function() { return discordRoleIdsArr[this.longName] },
            maps: [
                "South Desert 1",
                "South Desert 2",
                "South Desert 4"
            ]
        },
        "Sponge": {
            longName: "Sponge",
            holeEnterMsg: false,
            role: function() { return discordRoleIdsArr[this.longName] },
            maps: [
                "East Waters 1",
                "East Waters 2",
                "East Waters 3"
            ]
        },
        "Digger": {
            longName: "Digger",
            holeEnterMsg: false,
            role: function() { return discordRoleIdsArr[this.longName] },
            maps: [
                "Centralia Fields 1",
                "Centralia Fields 2",
                "Centralia Fields 3",
                "Centralia Fields 5",
                "Centralia Fields 6",
                "Centralia Maze",
                "South Desert 1",
                "South Desert 2",
                "South Desert 4",
                "Ellne",
                "Ellne Jungle 1",
                "Ellne Jungle 2",
                "Ellne Jungle 3",
                "Ellne Jungle 4",
                "Ellne Jungle 5"
            ]
        },
        "Bumble Bee": {
            longName: "Bumble Bee",
            holeEnterMsg: false,
            role: function() { return discordRoleIdsArr[this.longName] },
            maps: [
                "Centralia Fields 1",
                "Centralia Fields 2",
                "Centralia Fields 3",
                "Centralia Fields 5",
                "Centralia Maze"
            ]
        },
        "Ladybug": {
            longName: "Shiny Ladybug",
            holeEnterMsg: false,
            role: function() { return discordRoleIdsArr[this.longName] },
            maps: [
                "South Oasis",
                "South Desert 1",
                "South Desert 2",
                "South Desert 4"
            ]
        }
    },
    availableMaps = [
        "Ant Hell",
        "Desert",
        "Ellne",
        "Garden",
        "Jungle",
        "Ocean",
        "Sewers",
        "Centralia",
        "Centralia Fields 1",
        "Centralia Fields 2",
        "Centralia Fields 3",
        "Centralia Fields 4",
        "Centralia Fields 5",
        "Centralia Fields 6",
        "Centralia Fields 7",
        "Centralia Maze",
        "Centralia Sewers 1",
        "Centralia Sewers 2",
        "Centralia Sewers 3",
        "Centralia Sewers 4",
        "Centralia Beach",
        "East Waters 1",
        "East Waters 2",
        "East Waters 3",
        "East Waters 4",
        "East Waters 5",
        "East Waters 6",
        "East Waters 7",
        "Crab Kingdom",
        "Jellyfish Fields",
        "South Desert 1",
        "South Desert 2",
        "South Desert 3",
        "South Desert 4",
        "South Desert 5",
        "South Oasis",
        "Ant Hell 1",
        "Ant Hell 2",
        "Ant Hell 3",
        "Ellne",
        "Ellne Pass",
        "Ellne Jungle 1",
        "Ellne Jungle 2",
        "Ellne Jungle 3",
        "Ellne Jungle 4",
        "Ellne Jungle 5",
        "Ellne Jungle 6",
        "Hel / PvP"
    ],
    thisCurrentMap,
    Furaken_LCS_Obj = {
        "currentSpawnPoint": allAvailableSpawnpoint[0],
        "sounds": {
            Afk: "",
            Ultra: "",
            Super: "",
            SuperInZone: "",
            Personal: ""
        },
        "AutoToggle": true,
        "thisBuild": "",
        "thisAccountCode": "",
        "accountToken": ""
    },
    currentServersArray = [],
    thisMapNameOfId = "",
    thisServerName = "",
    currentCp6Array = [],
    currentSwitchServerCode = "",
    lastMobNameReportedToTracker = "",
    lastMobNameKillMsgReportedToTracker = "",
    lastPetalCraftReportedToTracker = "",
    florrioSuperTrackerBaneedNamesArray = ["Changelog", "Common", "Unusual", "Rare", "Epic", "Legendary", "Mythic", "Ultra", "Super", "Account", "undefined", "Continue", "Settings"],
    findCurrentSpawnPointIndexNumber = "",
    playerNameRegEx = /^[A-Za-z0-9#_-]+$/

function generateGuestRandomString(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}
if (localStorage.getItem('ServerSwitcherBeta') == null) localStorage.setItem('ServerSwitcherBeta', JSON.stringify(Furaken_LCS_Obj))
else {
    var Furaken_LCS_Obj_AsRealObject = JSON.parse(localStorage.getItem('ServerSwitcherBeta'))
    Object.keys(Furaken_LCS_Obj).forEach(k => {
        if (!Object.keys(Furaken_LCS_Obj_AsRealObject).includes(k)) Furaken_LCS_Obj_AsRealObject[k] = Furaken_LCS_Obj[k]
    })
    localStorage.setItem('ServerSwitcherBeta', JSON.stringify(Furaken_LCS_Obj_AsRealObject))
}

if (Furaken_LCS_Obj_AsRealObject.accountToken == "") {
    Furaken_LCS_Obj_AsRealObject.accountToken = generateGuestRandomString(4)
    localStorage.setItem('ServerSwitcherBeta', JSON.stringify(Furaken_LCS_Obj_AsRealObject))
}
let capoo6 = unsafeWindow.cp6
let websocketFinder = "";
const nativeWebsocketFinder = unsafeWindow.WebSocket;
unsafeWindow.WebSocket = function (...args) {
    const thisWSSURL = new nativeWebsocketFinder(...args);
    websocketFinder = thisWSSURL.url
    return thisWSSURL;
};
document.documentElement.addEventListener("keydown", function (e) {
    if (event.ctrlKey && event.keyCode == "9") {
        getCurrentServerId()
        FurakenServerSwitcherContainer.style.top = FurakenServerSwitcherContainer.style.top === '0px' ? serverSwitcherPosition : '0px'
    }
});
function getCurrentCapoo6Codes() {
    for (let i = 0; i <= allAvailableServers; i++) {
        fetch(`https://api.n.m28.io/endpoint/florrio-map-${i}-green/findEach/`).then((response) => response.json()).then((data) => {
            currentServersArray[i] = `${data.servers["vultr-miami"].id} ${data.servers["vultr-frankfurt"].id} ${data.servers["vultr-tokyo"].id}`
        });
    }
}
getCurrentCapoo6Codes()

var FurakenServerSwitcherContainer = document.createElement('div')
FurakenServerSwitcherContainer.style = `
    width: 700px;
    height: auto;
    background-image: url(${customBackground});
    background-size: 35%;
    z-index: 1;
    position: relative;
    border-radius: 5px;
    border: 6px solid rgba(0,0,0, 0.3);
    margin: 0 auto;
    color: white;
    text-align: center;
    font-family: 'Ubuntu';
    padding: 12px;
    text-shadow: rgb(0 0 0) 2px 0px 0px, rgb(0 0 0) 1.75517px 0.958851px 0px, rgb(0 0 0) 1.0806px 1.68294px 0px, rgb(0 0 0) 0.141474px 1.99499px 0px, rgb(0 0 0) -0.832294px 1.81859px 0px, rgb(0 0 0) -1.60229px 1.19694px 0px, rgb(0 0 0) -1.97998px 0.28224px 0px, rgb(0 0 0) -1.87291px -0.701566px 0px, rgb(0 0 0) -1.30729px -1.5136px 0px, rgb(0 0 0) -0.421592px -1.95506px 0px, rgb(0 0 0) 0.567324px -1.91785px 0px, rgb(0 0 0) 1.41734px -1.41108px 0px, rgb(0 0 0) 1.92034px -0.558831px 0px;
    top: ${serverSwitcherPosition};
    pointer-events: none;
    transition: all 1s ease-in-out;
`
FurakenServerSwitcherContainer.id = "FurakenServerSwitcherContainer"
document.querySelector('body').appendChild(FurakenServerSwitcherContainer)

var currentCapoo6Messages = document.createElement('div')
currentCapoo6Messages.innerHTML = "Finding Capoo6 codes..."
FurakenServerSwitcherContainer.appendChild(currentCapoo6Messages)

function getCurrentServerId() {
    var AlternativeWebsocketURL = websocketFinder.slice(6, websocketFinder.indexOf("."))
    if (!currentServersArray.join(" ").includes(AlternativeWebsocketURL)) getCurrentCapoo6Codes()
    currentServersArray.forEach(function callback(x, index) {
        if (x.includes(AlternativeWebsocketURL)) {
            if (index == 1) currentSpawnpointSet = allAvailableSpawnpoint[0]
            else if (index == 14) currentSpawnpointSet = allAvailableSpawnpoint[1]
            if (index == 1 || index == 14) Furaken_LCS_Obj_AsRealObject.currentSpawnPoint = currentSpawnpointSet
            localStorage.setItem('ServerSwitcherBeta', JSON.stringify(Furaken_LCS_Obj_AsRealObject))
            thisMapNameOfId = "MAP" + index
            currentCp6Array = x.split(" ")
            if (AlternativeWebsocketURL == currentCp6Array[0]) thisServerName = "NA"
            else if (AlternativeWebsocketURL == currentCp6Array[1]) thisServerName = "EU"
            else if (AlternativeWebsocketURL == currentCp6Array[2]) thisServerName = "AS"
        }
    })
    currentCapoo6Messages.innerHTML = `Connected to ${thisServerName} ${thisMapNameOfId}<br>${websocketFinder.slice(6, -1)}`
}

function switchServer() {
    currentSwitchServerCode = prompt('Input server name: na/eu/as?')
    if (Furaken_LCS_Obj_AsRealObject.currentSpawnPoint == "Centralia") findCurrentSpawnPointIndexNumber = 1
    else if (Furaken_LCS_Obj_AsRealObject.currentSpawnPoint == "Ellne") findCurrentSpawnPointIndexNumber = 14
    else return
    if (currentSwitchServerCode.toLowerCase() == 'na') capoo6.forceServerID(currentServersArray[findCurrentSpawnPointIndexNumber].split(" ")[0])
    else if (currentSwitchServerCode.toLowerCase() == 'eu') capoo6.forceServerID(currentServersArray[findCurrentSpawnPointIndexNumber].split(" ")[1])
    else if (currentSwitchServerCode.toLowerCase() == 'as') capoo6.forceServerID(currentServersArray[findCurrentSpawnPointIndexNumber].split(" ")[2])
}

document.querySelector('canvas').onclick = function () {
    FurakenServerSwitcherContainer.style.top = serverSwitcherPosition
}

const Tracker = new class {
    XHR() {
        const Super = new XMLHttpRequest();
        Super.open("POST", "https://discord.com/api/webhooks/1223620927020073032/DumoG-WRpH7skbjouBndUTWt07xohX8aZCUeHkvWYCqItuXbcExf5pEEKgI0bv2ANXpw");
        Super.setRequestHeader('Content-type', 'application/json');

        const Ultra = new XMLHttpRequest();
        Ultra.open("POST", "https://discord.com/api/webhooks/1225120653330354268/REzp5cNvGGKgSAHKj4Rz4jF5lUj3bJFFnmi4u5g-afR_2Vug8-x0BVx2X-Sw7NL4g4k8");
        Ultra.setRequestHeader('Content-type', 'application/json');

        const loggerSpawn = new XMLHttpRequest();
        loggerSpawn.open("POST", "https://discord.com/api/webhooks/1205022085458694144/JNbKfgDp0S0O9oGmOffhT7MjsrRz7AJf95uHMHIYH3J1ph9XELXQ_HhvFxiGFdxbK2z8");
        loggerSpawn.setRequestHeader('Content-type', 'application/json');

        const loggerDeath = new XMLHttpRequest();
        loggerDeath.open("POST", "https://discord.com/api/webhooks/1205022959853641778/ZGwLN9DDfFwJNswhpT9VRlxKGvba3Aqnm6kQ6bFXVTcFhmmL8rizRp4ege91Cx5AUmZS");
        loggerDeath.setRequestHeader('Content-type', 'application/json');

        const loggerCraft = new XMLHttpRequest();
        loggerCraft.open("POST", "https://discord.com/api/webhooks/1205022798712672307/pGIe2UzMSqwopDI_gHpudSmC2oBc0vW7huWwptAPwC9Rp52CvYJCcAkR-fkwKXqgyXHf");
        loggerCraft.setRequestHeader('Content-type', 'application/json');

        const Logger = new XMLHttpRequest();
        Logger.open("POST", "https://discord.com/api/webhooks/1205023134223433769/UJBpKmPVwpkbJ-_KdS4Elkf8AHmnz15XgzsLfR6ntaF3ESw30SzxfGprza9cOKDstORK");
        Logger.setRequestHeader('Content-type', 'application/json');

        return {Super, Ultra, loggerSpawn, loggerDeath, loggerCraft, Logger}
    }
    TrackerNotifier(content, thisMobName, thisMobRarity, thisPlayer, thisTextColor, type) {
        if (didOfflineSend) {
            lastMobNameReportedToTracker = ""
            lastMobNameKillMsgReportedToTracker = ""
            lastPetalCraftReportedToTracker = ""
            return
        }
        if (thisTextColor == "#ffffff" || thisTextColor == "#000000") return
        var color = parseInt(thisTextColor.slice(1), 16);
        var isTTS = false
        var currentTime = Math.floor(Date.now() / 1000);
        if (Date.now() - lastOnlineScreenTime > 60 * 1000) return
        if (type == "Spawn") {
            if (thisMobName != lastMobNameReportedToTracker) return
            lastMobNameReportedToTracker = ""
            if (thisMobRarity == "Super" && !content.includes("somewhere!") && Object.keys(uniqueSpawnMessages).find(key => uniqueSpawnMessages[key] == content) == null) {
                color = 0xDBD74B
                new Audio(Furaken_LCS_Obj_AsRealObject.sounds.SuperInZone).play()
            }
            Tracker.XHR()[thisMobRarity].send(JSON.stringify({
                tts: true,
                content: `${thisServerName}: ${thisMobRarity} ${thisMobName} ${discordRoleIdsArr[thisMobRarity]}`,
                embeds: [{
                    title: `${thisServerName}: ${thisMobRarity} ${thisMobName}`,
                    description: content + `\n**Send time**: <t:${currentTime}:R>`,
                    color: color,
                    thumbnail: {
                        url: `https://raw.githubusercontent.com/Furaken/florr/main/image/mob/${thisMobRarity}/${thisMobName}.png`.replaceAll(" ", "%20")
                    },
                    footer: {
                        text: `${versionScript} - Reported in ${thisCurrentMap} - ${checkCurrentBuildVersion}`
                    }
                }],
            }));
            Tracker.XHR().Logger.send(JSON.stringify({
                content: "```js\n" + JSON.stringify({
                    "type": "Report",
                    "region": thisServerName,
                    "map": thisCurrentMap,
                    "rarity": thisMobRarity,
                    "mob": thisMobName,
                    "user": Furaken_LCS_Obj_AsRealObject.accountToken,
                    "time": Math.floor(Date.now() / 1000),
                    "version": versionScript
                }, null, 4) + "```",
            }));
            if (Object.keys(ultraMobSpawns).includes(thisMobName) && ultraMobSpawns[thisMobName].maps.includes(thisCurrentMap) && thisMobRarity == "Ultra") {
                var thisContentMsg = "",
                    thisTitleMsg = "",
                    thisDescription = ""
                if (ultraMobSpawns[thisMobName].holeEnterMsg == true) {
                    thisContentMsg = `Someone has entered ${thisServerName}: ${thisMobRarity} ${ultraMobSpawns[thisMobName].longName}!`
                    thisTitleMsg = `${thisServerName}: ${thisMobRarity} ${ultraMobSpawns[thisMobName].longName} timer has been activated!`
                    thisDescription = `\nExplode time: <t:${Math.floor(Date.now() / 1000) + 10 * 60}:R>`
                } else {
                    thisContentMsg = `${thisServerName}: ${thisMobRarity} ${ultraMobSpawns[thisMobName].longName}`
                    thisTitleMsg = thisContentMsg
                }
                if (Object.keys(ultraMobSpawns).includes("Ladybug")) isTTS = true
                Tracker.XHR().Super.send(JSON.stringify({
                    content: `${thisContentMsg} ${ultraMobSpawns[thisMobName].role()}`,
                    embeds: [{
                        tts: isTTS,
                        title: thisTitleMsg,
                        description: content + thisDescription + `\n**Send time**: <t:${currentTime}:R>`,
                        color: color,
                        thumbnail: {
                            url: `https://raw.githubusercontent.com/Furaken/florr/main/image/mob/${thisMobRarity}/${ultraMobSpawns[thisMobName].longName}.png`.replaceAll(" ", "%20")
                        },
                        footer: {
                            text: `${versionScript} - Reported in ${thisCurrentMap} - ${checkCurrentBuildVersion}`
                        }
                    }],
                }));
            }
            new Audio(Furaken_LCS_Obj_AsRealObject.sounds[thisMobRarity]).play()
            if (thisMobRarity == "Super") {
                Tracker.XHR().loggerSpawn.send(JSON.stringify({
                    username: "Reporter - " + versionScript,
                    content: `${thisServerName}: ${thisMobRarity} ${thisMobName}\n\`${Math.floor(Date.now() / 1000)}\`\n<t:${Math.floor(Date.now() / 1000)}:R>\n_\n_`
                }));
            }
        } else if (type == "Death") {
            if (thisMobName != lastMobNameKillMsgReportedToTracker) return
            lastMobNameKillMsgReportedToTracker = ""
            Tracker.XHR().Logger.send(JSON.stringify({
                content: "```js\n" + JSON.stringify({
                    "type": "Death",
                    "region": thisServerName,
                    "map": thisCurrentMap,
                    "rarity": thisMobRarity,
                    "mob": thisMobName,
                    "user": Furaken_LCS_Obj_AsRealObject.accountToken,
                    "time": Math.floor(Date.now() / 1000),
                    "version": versionScript
                }, null, 4) + "```",
            }));
            if ((thisMobRarity == "Super") || (Object.keys(ultraMobSpawns).includes(thisMobName) && ultraMobSpawns[thisMobName].maps.includes(thisCurrentMap) && thisMobRarity == "Ultra")) {
                Tracker.XHR().Super.send(JSON.stringify({
                    embeds: [{
                        description: "### " + thisServerName + ": " + content + `\n**Send time**: <t:${currentTime}:R>`,
                        color: color,
                        footer: {
                            text: `${versionScript} - Reported in ${thisCurrentMap} - ${checkCurrentBuildVersion}`
                        }
                    }],
                }));
            } else if (thisMobRarity == "Ultra") {
                Tracker.XHR().Ultra.send(JSON.stringify({
                    embeds: [{
                        description: "### " + thisServerName + ": " + content + `\n**Send time**: <t:${currentTime}:R>`,
                        color: color,
                        footer: {
                            text: `${versionScript} - Reported in ${thisCurrentMap} - ${checkCurrentBuildVersion}`
                        }
                    }],
                }));
            }
            if (thisMobRarity == "Super") {
                Tracker.XHR().loggerDeath.send(JSON.stringify({
                    username: "Reporter - " + versionScript,
                    content: `${content.replaceAll("_", "\\_")}\n\`${Math.floor(Date.now() / 1000)}\`\n<t:${Math.floor(Date.now() / 1000)}:R>\n_\n_`
                }));
            }
        } else if (type == "Craft") {
            if (thisMobName != lastPetalCraftReportedToTracker) return
            lastPetalCraftReportedToTracker = ""
            Tracker.XHR().Logger.send(JSON.stringify({
                content: "```js\n" + JSON.stringify({
                    "type": "Craft",
                    "region": thisServerName,
                    "map": thisCurrentMap,
                    "rarity": thisMobRarity,
                    "petal": thisMobName,
                    "player": thisPlayer,
                    "user": Furaken_LCS_Obj_AsRealObject.accountToken,
                    "time": Math.floor(Date.now() / 1000),
                    "version": versionScript
                }, null, 4) + "```",
            }));
            if (thisMobRarity == "Super") {
                Tracker.XHR().Super.send(JSON.stringify({
                    content: discordRoleIdsArr.Craft,
                    embeds: [{
                        description: "### " + content + `\n**Send time**: <t:${currentTime}:R>`,
                        color: color,
                        footer: {
                            text: `${versionScript} - Reported in ${thisCurrentMap} - ${checkCurrentBuildVersion}`
                        }
                    }],
                }));
            }
            if (thisMobRarity == "Super") {
                Tracker.XHR().loggerCraft.send(JSON.stringify({
                    username: "Reporter - " + versionScript,
                    content: `${content.replaceAll("_", "\\_")}\n\`${Math.floor(Date.now() / 1000)}\`\n<t:${Math.floor(Date.now() / 1000)}:R>\n_\n_`
                }));
            }
        }
    }
}

var lastOnlineScreenTime = Date.now(),
    lastAfkCheckTime = 0,
    afkCheckReport, areYouHereReport, imHereReport, notMovingAfk
function thisTrackerFunction(text, thisTextColor, isPassBoolean) {
    if (/An? ([^\s]+) .+ has spawned!/.test(text)) {
        const thisMatch = text.match(/(?<=An?\s([^\s]+)\s).+(?= has spawned!)/)
        const thisMobName = thisMatch[0]
        const thisMobRarity = thisMatch[1]
        if (isPassBoolean) lastMobNameReportedToTracker = thisMobName
        Tracker.TrackerNotifier(text, thisMobName, thisMobRarity, null, thisTextColor, "Spawn")
    }
    if (/An? ([^\s]+) .+ has spawned somewhere!/.test(text)) {
        const thisMatch = text.match(/(?<=An?\s([^\s]+)\s).+(?= has spawned somewhere!)/)
        const thisMobName = thisMatch[0]
        const thisMobRarity = thisMatch[1]
        if (isPassBoolean) lastMobNameReportedToTracker = thisMobName
        Tracker.TrackerNotifier(text, thisMobName, thisMobRarity, null, thisTextColor, "Spawn")
    }
    if (/An? ([^\s]+) .+ has been defeated!/.test(text)) {
        const thisMatch = text.match(/(?<=An?\s([^\s]+)\s).+(?= has been defeated!)/)
        const thisMobName = thisMatch[0]
        const thisMobRarity = thisMatch[1]
        const thisPlayer = ""
        if (isPassBoolean) lastMobNameKillMsgReportedToTracker = thisMobName
        Tracker.TrackerNotifier(text, thisMobName, thisMobRarity, thisPlayer, thisTextColor, "Death")
    }
    if (/An? ([^\s]+) .+ has been defeated by .+!/.test(text)) {
        const thisMatch = text.match(/(?<=An?\s([^\s]+)\s).+(?= has been defeated by (.+)!)/)
        const thisMobName = thisMatch[0]
        const thisMobRarity = thisMatch[1]
        const thisPlayer = thisMatch[2]
        if (isPassBoolean) lastMobNameKillMsgReportedToTracker = thisMobName
        Tracker.TrackerNotifier(text, thisMobName, thisMobRarity, thisPlayer, thisTextColor, "Death")
    }
    if (/A Super .+ has been crafted by .+!/.test(text)) {
        const thisMatch = text.match(/(?<=A\s([^\s]+)\s).+(?= has been crafted by (.+)!)/)
        const thisMobName = thisMatch[0]
        const thisMobRarity = thisMatch[1]
        const thisPlayer = thisMatch[2]
        if (isPassBoolean) lastPetalCraftReportedToTracker = thisMobName
        Tracker.TrackerNotifier(text, thisMobName, thisMobRarity, thisPlayer, thisTextColor, "Craft")
    }
    if (/A Super .+ has been crafted!/.test(text)) {
        const thisMatch = text.match(/(?<=A\s([^\s]+)\s).+(?= has been crafted!)/)
        const thisMobName = thisMatch[0]
        const thisMobRarity = thisMatch[1]
        const thisPlayer = ""
        if (isPassBoolean) lastPetalCraftReportedToTracker = thisMobName
        Tracker.TrackerNotifier(text, thisMobName, thisMobRarity, thisPlayer, thisTextColor, "Craft")
    }
    var thisMobName = Object.keys(uniqueSpawnMessages).find(key => uniqueSpawnMessages[key] == text)
    if (thisMobName) {
        if (isPassBoolean) lastMobNameReportedToTracker = thisMobName
        Tracker.TrackerNotifier(text, thisMobName, "Super", null, thisTextColor, "Spawn")
    }
    if (text == "AFK Check") afkCheckReport = Date.now()
    if (text == "Are you here?") areYouHereReport = Date.now()
    if (text == "I'm here") imHereReport = Date.now()
    if (text == "You will be kicked for being AFK if you don't move soon.") notMovingAfk = Date.now()
    if (((Date.now() - afkCheckReport < 300 && Date.now() - areYouHereReport < 300 && Date.now() - imHereReport < 300) || Date.now() - notMovingAfk < 300) && Date.now() - lastAfkCheckTime > 60 * 1000) {
        new Audio(Furaken_LCS_Obj_AsRealObject.sounds.Afk).play()
        if (Furaken_LCS_Obj_AsRealObject.sounds.Personal != null || Furaken_LCS_Obj_AsRealObject.sounds.Personal != "") {
            Tracker.XHR().Super.send(JSON.stringify({
                content: `<@${Furaken_LCS_Obj_AsRealObject.sounds.Personal}>`,
                embeds: [{
                    title: `AFK Check ✅`,
                    description: customAfkMsg[Math.floor(Math.random() * customAfkMsg.length)],
                    color: 0xDBD74B
                }],
            }));
        }
        lastAfkCheckTime = Date.now()
    }
    lastOnlineScreenTime = Date.now()
    return text;
}
function getFurakenCanvas() {
    if (typeof (OffscreenCanvasRenderingContext2D) == 'undefined') {
        return [CanvasRenderingContext2D]
    }
    return [OffscreenCanvasRenderingContext2D, CanvasRenderingContext2D];
}

for (const { prototype } of getFurakenCanvas()) {
    if (prototype.newAlternativeArc == undefined) {
        prototype.newAlternativeMeaText = prototype.measureText;
        prototype.newAlternativeFiText = prototype.fillText;
    } else { break }
}

var getPlayerNamesArray = [],
    forceThisPlayerName = "",
    checkCurrentBuildVersion = "",
    checkCurrentBuildAndChaneglogVersion = ""
for (const { prototype } of getFurakenCanvas()) {
    prototype.fillText = function (text, x, y) {
        if (availableMaps.includes(text)) {
            if (thisCurrentMap == null) {
                setTimeout(() => {
                    Tracker.XHR().Logger.send(JSON.stringify({
                        content: "```js\n" + JSON.stringify({
                            "type": "Logs",
                            "region": thisServerName,
                            "map": thisCurrentMap,
                            "user": Furaken_LCS_Obj_AsRealObject.accountToken,
                            "time": Math.floor(Date.now() / 1000),
                            "version": versionScript
                        }, null, 4) + "```",
                    }));
                }, 2000)

            }
            thisCurrentMap = text
        }
        return this.newAlternativeFiText(thisTrackerFunction(text, this.fillStyle, false), x, y);
    }
    prototype.measureText = function(text) {
        if (text.includes("Build ")) {
            checkCurrentBuildVersion = text.replace("  ", " ")
            if (Furaken_LCS_Obj_AsRealObject.thisBuild != `${versionHash} - ${checkCurrentBuildVersion}`) {
                var AlertMessages = `**Build version**: \`${checkCurrentBuildVersion}\`\n**versionHash**: \`${versionHash}\``
                Furaken_LCS_Obj_AsRealObject.thisBuild = `${versionHash} - ${checkCurrentBuildVersion}`
                Tracker.XHR().Super.send(JSON.stringify({
                    content: discordRoleIdsArr.Reporter,
                    embeds: [{
                        title: `New Build`,
                        description: AlertMessages,
                        color: 0xF11A7B
                    }]
                }));
                localStorage.setItem('ServerSwitcherBeta', JSON.stringify(Furaken_LCS_Obj_AsRealObject))
                alert(AlertMessages)
            }
        }
        if (!getPlayerNamesArray.includes('Ready')) getPlayerNamesArray.push(text)
        else {
            if (getPlayerNamesArray[getPlayerNamesArray.length - 2].includes(" ") && forceThisPlayerName == "") getPlayerNamesArray.splice(-2, 1)
            else forceThisPlayerName = getPlayerNamesArray[getPlayerNamesArray.length - 2] + Furaken_LCS_Obj_AsRealObject.thisAccountCode
        }
        if (getPlayerNamesArray.length > 20) getPlayerNamesArray.shift()
        return this.newAlternativeMeaText(thisTrackerFunction(text, "#000000", true))
    }
}

var websocketURLArray = [],
    didOfflineSend = false,
    didFirstOnlineSend = false

setInterval(function() {
    if (Date.now() - lastOnlineScreenTime > 60 * 1000) return
    Tracker.XHR().Logger.send(JSON.stringify({
        content: "```js\n" + JSON.stringify({
            "type": "Logs",
            "region": thisServerName,
            "map": thisCurrentMap,
            "user": Furaken_LCS_Obj_AsRealObject.accountToken,
            "time": Math.floor(Date.now() / 1000),
            "version": versionScript
        }, null, 4) + "```",
    }));
}, 5 * 60 * 1000);

setInterval(function() {
    websocketURLArray.unshift(websocketFinder)
    if (websocketURLArray.length > 2) websocketURLArray.splice(2)
    if (websocketURLArray[websocketURLArray.length - 1] != websocketURLArray[0]) {
        getCurrentServerId()
        if (Furaken_LCS_Obj_AsRealObject.AutoToggle == true) {
            FurakenServerSwitcherContainer.style.top = '0px'
            var autoHideFurakenContainer = setTimeout(function () {
                FurakenServerSwitcherContainer.style.top = serverSwitcherPosition
                clearTimeout(autoHideFurakenContainer)
            }, 3000);
        }
    }
    if (checkCurrentBuildVersion == "") {
        unsafeWindow.dispatchEvent(new KeyboardEvent('keydown', {
            code: 'Semicolon',
            key: ';',
            charCode: 186,
            keyCode: 186,
            view: unsafeWindow,
            bubbles: true,
            cancelable: true
        }));
        unsafeWindow.dispatchEvent(new KeyboardEvent('keyup', {
            code: 'Semicolon',
            key: ';',
            charCode: 186,
            keyCode: 186,
            view: unsafeWindow,
            bubbles: true,
            cancelable: true
        }));
    }
}, 1000)
