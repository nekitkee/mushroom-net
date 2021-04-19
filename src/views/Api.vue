<template>
  <div class="api">
    <h1>API for developers</h1>

    🎁 Great news, our REST API is free to use! <br><br>

  <table id="apitable">
  
  <tr>
    <td>Url</td>
    <td>https://apim.mushroomscan.com/api</td>
  </tr>
  <tr>
    <td>Path</td>
    <td>/predict</td>
  </tr>
  <tr>
    <td>Method</td>
    <td>POST</td>
  </tr>
  <tr>
    <td>Payload</td>
    <td>multipart/form-data</td>
  </tr>
</table>

<!------------------------->

    <h3>Response format</h3>
    <pre>
    {
      "Agaricus": "0.01",
      "Amanita": "0.00",
      "Boletus": "0.76",
      "Cortinarius": "0.14",
      "Entoloma": "0.00",
      "Hygrocybe": "0.00",
      "Lactarius": "0.05",
      "Russula": "0.01",
      "Suillus": "0.03"
    }
    </pre>

    <h3>Request examples</h3>
    <div class="">
      
    <vs-tabs>
    <vs-tab label="C#">
        <div class="con-tab-ejemplo">
         <pre>
      var client = new RestClient("https://apim.mushroomscan.com/api/predict");
      client.Timeout = -1;
      var request = new RestRequest(Method.POST);
      request.AddFile("file", "/C:/pictures/image.png");
      IRestResponse response = client.Execute(request);
      Console.WriteLine(response.Content);
        </pre>
        </div>
    </vs-tab>
    <vs-tab label="Curl">
        <div class="con-tab-ejemplo">
         <pre>
      curl --location --request POST 'https://apim.mushroomscan.com/api/predict' \
      --form 'file=@"/C:/pictures/image.png"'
        </pre>
        </div>
      </vs-tab>

       <vs-tab label="Dart">
        <div class="con-tab-ejemplo">
         <pre>
      var request = http.MultipartRequest('POST', Uri.parse('https://apim.mushroomscan.com/api/predict'));
      request.files.add(await http.MultipartFile.fromPath('file', '/C:/pictures/image.png'));

      http.StreamedResponse response = await request.send();

      if (response.statusCode == 200) {
        print(await response.stream.bytesToString());
      }
      else {
        print(response.reasonPhrase);
      }
        </pre>
        </div>
      </vs-tab>
    
      <vs-tab label="Java">
        <div class="con-tab-ejemplo">
          <pre>
      OkHttpClient client = new OkHttpClient().newBuilder().build();
      MediaType mediaType = MediaType.parse("text/plain");
      RequestBody body = new MultipartBody.Builder().setType(MultipartBody.FORM)
        .addFormDataPart("file","/C:/pictures/image.png",
      RequestBody.create(MediaType.parse("application/octet-stream"),
          new File("/C:/pictures/image.png"))).build();
      Request request = new Request.Builder()
        .url("https://apim.mushroomscan.com/api/predict")
        .method("POST", body)
        .build();
      Response response = client.newCall(request).execute();
        </pre>
        </div>
      </vs-tab>
      
      <vs-tab label="JavaScript">
        <div class="con-tab-ejemplo">
         <pre>
      var formdata = new FormData();
      formdata.append("file", fileInput.files[0], "/C:/pictures/image.png");

      var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
      };

      fetch("https://apim.mushroomscan.com/api/predict", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
        </pre>
        </div>
      </vs-tab>
     
      <vs-tab label="Python">
        <div class="con-tab-ejemplo">
         <pre>
      import requests
      url = "https://apim.mushroomscan.com/api/predict"
      payload={}
      files=[ ('file',('aug.png',open('/C:/pictures/image.png','rb'),'image/png'))]
      headers = {}
      response = requests.request("POST", url, headers=headers, data=payload, files=files)
      print(response.text)
    </pre>
        </div>
      </vs-tab>
      
    </vs-tabs>
  </div>
  </div>
</template>

<style scoped>
.cred{
text-align: left;
margin-left: 1rem;

}
pre {
    background: #f4f4f4;
    border: 1px solid #ddd;
    border-left: 3px solid #f36d33;
    color: #666;
    page-break-inside: avoid;
    font-family: monospace;
    font-size: 15px;
    line-height: 1.6;
    margin-bottom: 1.6em;
    max-width: 100%;
    overflow: auto;
    padding: 1em 1.5em;
    display: block;
    word-wrap: break-word;
    text-align: left;
}

h3 {
  margin-bottom: 1rem;
}

#apitable {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
  margin-bottom: 1rem;
}

#apitable td, #apitable th {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

#apitable tr:nth-child(even){background-color: #f4f4f4;}


#apitable th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #4CAF50;
  color: white;
}

</style>