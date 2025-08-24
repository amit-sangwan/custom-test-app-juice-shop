
> ⚠️ **This is a custom version of OWASP Juice Shop, intended for testing REST APIs, Selenium automation, and security testing.**  

> Not an official OWASP deployment. For learning, testing, and experimentation only.


---

## About

OWASP Juice Shop is a deliberately insecure web application designed to teach and test web security in a safe environment.  

This **custom version** is specifically modified for:

- REST API testing  
- Selenium automation practice  
- Security and penetration testing  

It includes all the original OWASP Juice Shop vulnerabilities and features, with additional **custom branding and testing hooks**.

---

## Setup

### From Sources

```bash
git clone https://github.com/amit-sangwan/amit-test-app-custom-juice-shop.git
cd amit-test-app-custom-juice-shop
npm install
npm start

Browse to http://localhost:3000

##DOCKER
docker build -t amit-custom-juice-shop
docker run --rm -p 3000:3000 amit-custom-juice-shop

##Contributing

Feel free to fork this repo and modify for your testing purposes. This version is primarily for personal and team experimentation.

---------------------------------------------------------------------------------------------------------------------------------
##Licensing:

Copyright (c) 2014-2025 Bjoern Kimminich & the OWASP Juice Shop contributors

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

