import axios from 'axios'

export default class ServerController {
  constructor () {
    this.url = `http://localhost:8800`
    axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
  }

  async register(data) {
    try {
      const req = await fetch(`${this.url}/register`, {
        method: 'POST',
        headers: { 'Content-Type':'application/json;charset=utf-8',
          'Access-Control-Allow-Origin':'*'},

        // format the data
        body: JSON.stringify(data),
      });

      const res = await req.json();

      return res
    }catch(err) {
      console.error(err);
    }
  }


  async login(data) {
    try {
      const req = await fetch(`${this.url}/login/`, {
        method: 'POST',
        headers: { 'Content-Type':'application/json;charset=utf-8',
          'Access-Control-Allow-Origin':'*'},

        // format the data
        body: JSON.stringify(data),
      });

      const res = await req.json();

      return res

    }catch(err) {
      console.error(err);
    }
  }

  async getSections() {
    try {
      const req = await fetch(`${this.url}/sections/`, {
        method: 'GET',
        headers: { 'Content-Type':'application/json;charset=utf-8',
          'Access-Control-Allow-Origin':'*'},
      });

      const res = await req.json();

      return res

    }catch(err) {
      console.error(err);
    }
  }

}