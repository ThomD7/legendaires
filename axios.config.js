import axios from "axios";


const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImY5YWY5YzUwLTFmZTMtNDBjYy1hMGJmLTlkNGU2Y2VjNDA5MyIsImlhdCI6MTcyMTIxOTAwNywic3ViIjoiZGV2ZWxvcGVyL2EwOWRlYThhLTY4N2YtYTg0YS02MWVjLTQzMzBlZWMzMzNjMCIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjQ1LjQ1LjEyMi4yNyJdLCJ0eXBlIjoiY2xpZW50In1dfQ.YB-S-MC6adB7VRqSia10JVgrpr9hGi4NiB0fdLcnwBg8-K8YoaPLcp7_HhDcYAV8FUTgcN8i6A6jUKz7-dY85Q";

axios.defaults.baseURL = "https://api.clashofclans.com/v1";
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
axios.defaults.headers.post['Content-Type'] = 'application/json';