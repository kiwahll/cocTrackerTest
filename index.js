import express from 'express';
const app = express();

const PORT = process.env.PORT || 3000;
app.use(express.static('public'));

app.get("/members", async (req, res) => {
    var returnList = ["-"];

    await fetch("https://api.clashofclans.com/v1/clans/%232RGORR892/members", {
        headers: { Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjI5YjkxNjFmLWUxOGQtNDQ1OS05Yjg5LTk1ZjZhN2I0MmQyMCIsImlhdCI6MTc0NTI0NjI0Nywic3ViIjoiZGV2ZWxvcGVyL2UzZGE4NzhkLWQ0NjktZDc5NS1lMjg3LWM0MmY0MmMyY2EwZiIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjgwLjEzMS4yMjkuMTYiXSwidHlwZSI6ImNsaWVudCJ9XX0.NEW1PGgsanFEeRwAEUOyeDS5NIlH3pULrP2kamWOzHoM6Ck4uiGvp0o5cXfImswLcY4hJLFh_45Spr7VS_k4nQ' }
    }).then(resp => resp.json()).then(data => {
        returnList = data["items"];
    });

    res.send(JSON.stringify(returnList));
});

app.listen(PORT, () => {
    console.log("Gestartet auf Port: " + PORT);
});