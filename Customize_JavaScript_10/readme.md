Using JavaSript to create a customizable output

In these project, the generated output is based on the input provided by the user. For example, if the user selects small size than the image will be displayed in small size. All these changes are performed using JavaScript i.e the CSS properties are set using JavaScript such as setAttribute function which sets attributes of the targetted element.
```
if(imgRadio == "banana_split") {
        document.getElementById("figid").innerText = "Yummy Banana Split";
        document.getElementById("imgDisplay").setAttribute('src', 'images/banana_split.jpg');
}
```
![Capture](https://user-images.githubusercontent.com/52541140/104037572-c55fdd00-51fa-11eb-88cf-ef0e5a65ddc2.PNG)
![Capture2](https://user-images.githubusercontent.com/52541140/104037606-c729a080-51fa-11eb-8582-1e548cd3707c.PNG)
![Capture3](https://user-images.githubusercontent.com/52541140/104037693-cd1f8180-51fa-11eb-9ef1-001fe8727acd.PNG)
