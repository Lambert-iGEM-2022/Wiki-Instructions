# Wiki Instructions
**For this year's Lambert iGEM wiki**, use **markdown** to write your content and convert it to formatted HTML. **There is zero learning curve** for markdown and it is almost impossible to break something. In fact, this `README` is written in markdown.

## Markdown
**Markdown is a easy-to-use markup language** that allows you to create formatted text. It reads like a normal text file and can achieve complex layouts by embedding snippets of pre-formatted HTML templates. This allows for complex layouts that weren't previously possible without HTML to be easily utilized in markdown. **To create a markdown file**, create a new file with the `.md` ending. Inside a markdown file, simply type away like you would in a new google doc. **For a quick markdown guide**, refer to the table below: 

### Basic Markdown Syntax

<table>
<tr>  
 
<th> Element </th>
<th> Markdown </th>
<th> Preview </th>
</tr>

<tr>
 
<td>

Headings

</td>

<td>
 
 ```markdown
 
 # H1
 ## H2
 ### H3
 ```

</td>

<td>
<img width="486" alt="Screen Shot 2022-07-02 at 12 33 04 AM" src="https://user-images.githubusercontent.com/61951438/176986601-ea070772-9e0c-4b0c-bb18-de1392cd2266.png">
</td>
 </tr>
 <tr>

 
<td>
 Bold
</td>
<td>
 
 ```markdown
 **bold text**
 ```
 
</td>
<td> 
<img width="265" alt="Screen Shot 2022-07-02 at 1 17 42 AM" src="https://user-images.githubusercontent.com/61951438/176987596-648cf905-30af-471a-a0b0-f6408a271a51.png">

</td>
 </tr>
 

<tr>
 
<td>
 Italic
</td>
<td>
 
 ```markdown
 *italicized text*
 ```
 
</td>

<td>
<img width="273" alt="Screen Shot 2022-07-02 at 1 18 21 AM" src="https://user-images.githubusercontent.com/61951438/176987610-4309feaf-bb26-44ad-814c-e0be839c79d2.png">

</td>

 </tr>
 
  <tr>
 
<td>
 Blockquote
</td>
<td>
 
 ```markdown
 > blockquote
 ```
 
</td>

<td>

<img width="296" alt="Screen Shot 2022-07-02 at 1 19 18 AM" src="https://user-images.githubusercontent.com/61951438/176987631-ed569805-b8f8-470b-94f6-1d689c7a72ed.png">

</td>


 </tr>
 
  <tr>
 
<td>
 Ordered List
</td>
<td>
 
 ```markdown
1. First item
2. Second item
3. Third item
 ```
 
</td>

<td>
<img width="230" alt="Screen Shot 2022-07-02 at 12 42 27 AM" src="https://user-images.githubusercontent.com/61951438/176986809-db331a77-c683-4f7a-91cd-39335e0171f6.png">
</td>
 </tr>
 
   <tr>
 
<td>
 Bulleted List
</td>
<td>
 
 ```markdown
- First item
- Second item
- Third item
 ```
 
</td>

<td>

<img width="224" alt="Screen Shot 2022-07-02 at 12 43 28 AM" src="https://user-images.githubusercontent.com/61951438/176986829-be54e4ab-be00-481b-b19f-195b0fd4f6e1.png">
</td>
 </tr>
 
 <tr>
<td>
 Inline Code
</td>
<td>

 
 ```markdown
`Inline`
```

</td>

<td>
<img width="394" alt="Screen Shot 2022-07-02 at 1 07 41 AM" src="https://user-images.githubusercontent.com/61951438/176987355-094d4a17-390f-410b-a479-7f4bdabf9448.png"></td>
</tr>
 
  <tr>
<td>
 Block Code
</td>
<td>
 
 
\```python
```python
if coding > biology {
   print("Yay!")
}
```
\```

</td>

<td>
<img width="383" alt="Screen Shot 2022-07-02 at 1 08 19 AM" src="https://user-images.githubusercontent.com/61951438/176987366-265f959a-98d4-4ec7-b4b8-4c4f552e2392.png">


</td>
</tr>
  <tr>
<td>
 Horizontal Divider
</td>
<td>
 
 ```markdown
---
```

</td>

<td>
<img width="599" alt="Screen Shot 2022-07-02 at 1 10 14 AM" src="https://user-images.githubusercontent.com/61951438/176987413-7c8f01fa-d1b8-4e40-b2f4-56a0d191d7b1.png">
</td>
</tr>
 

  <tr>
<td>
 Link
</td>
<td>
 
 ```markdown
[title](https://www.example.com)
```

</td>

<td>
<img width="291" alt="Screen Shot 2022-07-02 at 1 12 44 AM" src="https://user-images.githubusercontent.com/61951438/176987474-818708da-944e-4c18-915e-ec76d75e9432.png">
</td>
</tr>
 
   <tr>
<td>
 Image
</td>
<td>

 
 ```markdown
 
  {% include image.html 
 source="www.linktotheimage.com/imageurl" 
 alt="this is an image" 
 caption="Figure 1. This is an image of Akshaya"
 aspectRatio=1.3
 %}
 ```

</td>

<td>
<img width="505" alt="Screen Shot 2022-07-02 at 1 15 53 AM" src="https://user-images.githubusercontent.com/61951438/176987549-59bd6c06-2994-431e-9699-60ecfec440ac.png">
</td>
</tr>

 
</table>


**For a more detailed guide on markdown**, refer to [this page](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).


## Committee Colors 
Each page on the wiki will use accent colors to match it's committee, the colors for each committee has been finalized and are shown below.

![Group 132](https://user-images.githubusercontent.com/61951438/176987851-11aee109-4cfa-4ead-99ef-5a0c21c37fc7.png)



## Custom Components Library
**Along with the basic markdown elements**, we have created a library of custom HTML layout templates that you can use in markdown to achieve complex layouts. **To use any of the HTML layout templates**, copy the code snippet of the layout you want to use and replace the filler content with your content. **If you can't find what you are looking** for in the templates already created below, contact the wiki team and we will create a custom layout template for you.
<table>
<tr>  
 
<th> Code </th>
<th> Result </th>
</tr>

<tr>
<td>

### Icon Info Component

```html
 {% include iconInfoComponent.html 
 title="title" 
 text="some text" 
 icon="www.linktotheimage.com/imageurl"
 %}
 ```

</td>


<td>

<img width=1600 alt="Screen Shot 2022-06-28 at 7 34 42 PM" src="https://user-images.githubusercontent.com/61951438/176321499-81ca1e8f-8dd1-4146-b6c1-77865a7398ef.png">
</td>
</tr>
 
 <tr>
<td>

### Two Column Paragraph Component


```html
 {% include twoColumnParagraphComponent.html
 column1Title="Title"
 column1Text="some text"
 column2Title="Title"
 column2Text="some text"
 %}
 ```

</td>

<td>

<img width=1600 alt="Screen Shot 2022-06-28 at 7 34 42 PM" src="https://user-images.githubusercontent.com/61951438/176591857-b92df44d-2da4-4212-ad99-0efb9dff3da3.png">
</td>
</tr>
 
  <tr>
<td>

### Two Column Image Component


```html
{% include twoColumnImageComponent.html
image1URL="imageurl.com"
image1Figure="Figure 1. an image"
image2URL="imageurl.com"
image2Figure="Figure 2. another image"
 %}
 ```

</td>

<td>


<img width=1600 alt="Screen Shot 2022-06-28 at 7 34 42 PM" src="https://user-images.githubusercontent.com/61951438/176594151-1a7eb206-b068-45df-9cfc-7dead8892cf7.png">
</td>
</tr>



 </table>
 
