$("#calendar").evoCalendar({
    theme: "orange coral",
    calendarEvents: [
      {
        id: '1st', 
        name: "New Year",
        date: "January/1/2024",
        type: "holiday",
        everyYear: true
      },
      {
        id: '2ed', 
        name: "Good Friday",
        date: "March/29/2024",
        type: "holiday",
        everyYear: true
      },
      {
        id: '3rd', 
        name: "Eld-Ul-Fitar*",
        date: "April/11/2024",
        type: "holiday",
        everyYear: true
      },
      {
        id: '4th', 
        name: "Vaisakhi",
        date: "April/13/2024",
        type: "holiday",
        everyYear: true
      },
      {
        id: '5th', 
        name: "Ambedkar Jayanti",
        date: "April/14/2024",
        type: "holiday",
        everyYear: true
      },
      {
        id: '6th', 
        name: "Ram Navami",
        date: "April/17/2024",
        type: "holiday",
        everyYear: true
      },
      {
        id: '7th', 
        name: "Mahavir Jayanti",
        date: "April/21/2024",
        type: "holiday",
        everyYear: true
      },
      {
        id: '8th', 
        name: "Buddha Purnima",
        date: "May/23/2024",
        type: "holiday",
        everyYear: true
      },
      {
        id: '9th', 
        name: "Eid-Ul-Adha",
        date: "June/17/2024",
        type: "holiday",
        everyYear: true
      },
      {
        id: '10th', 
        name: "Muharram",
        date: "July/17/2024",
        type: "holiday",
        everyYear: true
      },
      {
        id: '11th', 
        name: "Raksha Bandhan",
        date: "August/19/2024",
        type: "holiday",
        everyYear: true
      },
      {
        id: '12th', 
        name: "Janmashtami",
        date: "August/26/2024",
        type: "holiday",
        everyYear: true
      },
      {
        id: '13th', 
        name: "Teej",
        date: "September/07/2024",
        type: "holiday",
        everyYear: true
      },
      {
        id: '14th', 
        name: "Ganesh Chaturthi",
        date: "September/07/2024",
        type: "holiday",
        everyYear: true
      },
      {
        id: '15th', 
        name: "Vishwakarma Puja",
        date: "September/17/2024",
        type: "holiday",
        everyYear: true
      },
      {
        id: '16th', 
        name: "Jeevit Putrika Vart",
        date: "September/25/2024",
        type: "holiday",
        everyYear: true
      },
      {
        id: '17th', 
        name: "Gandhi Jayanti",
        date: "October/02/2024",
        type: "holiday",
        everyYear: true
      },
      {
        id: '18th', 
        name: "Guru Nanak Jayanti",
        date: "November/15/2024",
        type: "holiday",
        everyYear: true
      },
      {
        id: '19th', 
        name: "Makar Sankranti",
        date: "January/15/2025",
        type: "holiday",
        everyYear: true
      },
      {
        id: '20th', 
        name: "Makar Sankranti",
        date: "January/15/2025",
        type: "holiday",
        everyYear: true
      },
      {
        name: "Summer vacation",
        badge: "20/05 - 15/06",
        date: ["May/20/2024", "June/15/2024"],
        description: "Vacation leave for 27 days.",
        type: "event",
        color: "#63d867"
      },
      {
        name: "Durga puja",
        badge: "10/10 - 15/10",
        date: ["October/10/2024", "October/15/2024"],
        description: "Vacation leave for 06 days.",
        type: "event",
        color: "#63d867"
      },
      {
        name: "Deepawali & Chattah",
        badge: "30/10 - 09/11",
        date: ["October/30/2024", "November/09/2024"],
        description: "Vacation leave for 11 days.",
        type: "event",
        color: "#63d867"
      },
      {
        name: "Winter Break",
        badge: "30/12 - 04/01",
        date: ["December/30/2024", "January/04/2025"],
        description: "Vacation leave for 11 days.",
        type: "event",
        color: "#63d867"
      },
      {
        name: "Holi",
        badge: "13/03 - 15/03",
        date: ["March/13/2025", "March/15/2025"],
        description: "leave for 3 days.",
        type: "event",
        color: "orange"
      }
    ]
  });
  
  // timer
  let days = document.getElementById('days');
  let hours = document.getElementById('hours');
  let minutes = document.getElementById('minutes');
  let secondes = document.getElementById('secondes');

  let dd = document.getElementById('dd');
  let hh = document.getElementById('hh');
  let mm = document.getElementById('mm');
  let ss = document.getElementById('ss');

  let endDate = '01/09/2025 00:00:00';
  
  let x = setInterval(function(){
    let now = new Date(endDate).getTime();
    let countDown = new Date().getTime();
    let distance = now - countDown;
    
    let d = Math.floor(distance / (1000 * 60 * 60 * 24));
    let h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60 ));
    let s = Math.floor((distance % (1000 * 60)) / (1000));
    
    days.innerHTML = d + "<br><span>Days</span>";
    hours.innerHTML = h + "<br><span>Hours</span>";
    minutes.innerHTML = m + "<br><span>Minutes</span>";
    secondes.innerHTML = s + "<br><span>Secondes</span>";
    
    dd.style.strokeDashoffset = 440 - (440 * d) / 365;
    hh.style.strokeDashoffset = 440 - (440 * h) / 24;
    mm.style.strokeDashoffset = 440 - (440 * m) / 60;
    ss.style.strokeDashoffset = 440 - (440 * s) / 60;
  let leftM = document.getElementById('leftM');
  let left = Math.trunc(d / 30);
  leftM.innerHTML = left + " Months left";
  });
  
  