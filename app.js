// logic for welcome screen
window.onload = (()=>{
    setTimeout(()=>{
        document.querySelector('.welcome-screen').classList.add('remove')
    },3000)
})

// Logic for slide nav

let nav = document.querySelector('nav')
let menu = document.querySelector('.menu')
let main = document.querySelector('main')


menu.addEventListener('click',()=>{
    nav.classList.toggle('slide')
    main.classList.toggle('down')

})

// Logic for theme

let theme = document.querySelector('.theme')
let roll = document.querySelector('.roll')

theme.addEventListener('click',()=>{
    roll.classList.toggle('change')

})

// logic for time and date

let hrs_span = document.querySelector('.hours')
let min_span = document.querySelector('.minutes')
let sec_span = document.querySelector('.seconds')
let am_span = document.querySelector('.AM')

let day_span = document.querySelector('.day')
let month_span = document.querySelector('.month')
let date_span = document.querySelector('.date')
let year_span = document.querySelector('.year')





setInterval(() => {
     let time = new Date()

     hr = time.getHours()
     min = time.getMinutes()
     sec = time.getSeconds()

     day = time.getDay()
     month = time.getMonth()
     Dates = time.getDate()
     year = time.getFullYear()



    if(hr <= 9 ){
        hrs_span.innerHTML = "0" + hr
    }else(
        hrs_span.innerHTML = hr
        
    )
    
    if(min <= 9){
        min_span.innerHTML = "0" + min++;
    }else(
        min_span.innerHTML = min
    )
    
    if(sec <= 9){
        sec_span.innerHTML = "0" + sec++
    }else(
        sec_span.innerHTML = sec++
    )

    if(hr <= 11){
        am_span.innerHTML = "AM"
    }else(
        am_span.innerHTML = "PM"
    )


    switch(day){
        case 0:
            day_span.innerHTML = 'Sun ,'
        break;
        case 1:
            day_span.innerHTML = "Mon ,"
        break;
        case 2:
            day_span.innerHTML = "Tues ,"
        break;
        case 3:
            day_span.innerHTML = "Wed ,"
        break;
        case 4:
            day_span.innerHTML = "Thurs ,"
        break;
        case 5:
            day_span.innerHTML = "Fri ,"
        break;
        case 6:
            day_span.innerHTML = "Sat ,"
        break;
        

    }


    switch(month){
        case 0:
            month_span.innerHTML = "Janurary ,"
        break;
        case 1:
            month_span.innerHTML = "Feburary ,"
        break;
        case 2:
            month_span.innerHTML = "March ,"
        break;
        case 3:
            month_span.innerHTML = "April ,"
        break;
        case 4:
            month_span.innerHTML = "May ,"
        break;
        case 5:
            month_span.innerHTML = "June ,"
        break;
        case 6:
            month_span.innerHTML = "July ,"
        break;
        case 7:
            month_span.innerHTML = "August ,"
        break;
        case 8:
            month_span.innerHTML = "September ,"
        break;
        case 9:
            month_span.innerHTML = "October ,"
        break;
        case 10:
            month_span.innerHTML = "November ,"
        break;
        case 11:
            month_span.innerHTML = "December ,"
        break;

        
    }

    date_span.innerHTML = Dates + " ,"
    year_span.innerHTML = year 




    
},1000);





let input_show = document.querySelector('#input-show')
let clear = document.querySelector('#clear')
let delete_input = document.querySelector('#delete')
let input_btn = document.querySelectorAll('.input-btn')


window.onload(()=>{
    input_show.value = ''
})

let equal_press = 0;

input_btn.forEach((button)=>{
    button.addEventListener('click',()=>{

        input_show.value += button.value
    })
})


document.querySelector('#equal').addEventListener('click',()=>{
    equal_press = 1;

    try {

        let result = eval(input_show.value)

        if(Number.isInteger(result)){
            input_show.value = result
        }else{
            input_show.value = result.tofixed(2)
        }
        
    } catch (error) {

        console.log(error)

        input_show.value = "Error"

        setTimeout(()=>{
            input_show.value = ""
        },2000)
        
    }
})

clear.addEventListener('click',()=>{
    input_show.value = ''
    equal_press = 0;
})

delete_input.addEventListener('click',()=>{
    input_show.value = input_show.value.substring(0, input_show.value.length - 1)
})

