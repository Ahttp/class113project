function setup() {
    createCanvas(400, 400);
  }
  
  function preload(){
    img = loadImage('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8581dc75-f3df-4e70-9d1e-f113f9e041df/ddttabw-eda6c9a1-7654-4d78-b755-74bb9e916700.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg1ODFkYzc1LWYzZGYtNGU3MC05ZDFlLWYxMTNmOWUwNDFkZlwvZGR0dGFidy1lZGE2YzlhMS03NjU0LTRkNzgtYjc1NS03NGJiOWU5MTY3MDAuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.E3pRDyGwDiZIO2EELWo2pc50hHDqrk8woXWfAIvHoeI')
  }
  
  function draw() {
    image(img,  10, 10, 150, 120)
    
    background(120);
    circle(350, 35 , 70)
    circle(50, 35 , 70)
    circle(50, 350 , 70)
    circle(350, 350 , 70)
    fill(0 , 128 , 0)
    
    image(img,  10, 10, 150, 120)
    
  }