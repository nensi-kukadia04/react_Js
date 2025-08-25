import { useState } from "react";
import "../public/App.css";

function App() {
  const [allStudents, setAllStudents] = useState([
  {
    "roll_no": 54752,
    "first_name": "Nensi",
    "last_name": "Kukadiya",
    "age": 18,
    "phone": "7567265461",
    "address": "Surat",
    "class": "12th",
    "division": "A"
  },
  {
    "roll_no": 54753,
    "first_name": "Rahul",
    "last_name": "Sharma",
    "age": 17,
    "phone": "9876543210",
    "address": "Mumbai",
    "class": "11th",
    "division": "B"
  },
  {
    "roll_no": 54754,
    "first_name": "Priya",
    "last_name": "Patel",
    "age": 16,
    "phone": "8765432109",
    "address": "Ahmedabad",
    "class": "10th",
    "division": "C"
  },
  {
    "roll_no": 54755,
    "first_name": "Amit",
    "last_name": "Singh",
    "age": 18,
    "phone": "7654321098",
    "address": "Delhi",
    "class": "12th",
    "division": "A"
  },
  {
    "roll_no": 54756,
    "first_name": "Neha",
    "last_name": "Gupta",
    "age": 17,
    "phone": "6543210987",
    "address": "Bangalore",
    "class": "11th",
    "division": "B"
  },
  {
    "roll_no": 54757,
    "first_name": "Suresh",
    "last_name": "Verma",
    "age": 16,
    "phone": "5432109876",
    "address": "Hyderabad",
    "class": "10th",
    "division": "C"
  },
  {
    "roll_no": 54758,
    "first_name": "Anjali",
    "last_name": "Joshi",
    "age": 18,
    "phone": "4321098765",
    "address": "Pune",
    "class": "12th",
    "division": "A"
  },
  {
    "roll_no": 54759,
    "first_name": "Vikram",
    "last_name": "Malhotra",
    "age": 17,
    "phone": "3210987654",
    "address": "Chennai",
    "class": "11th",
    "division": "B"
  },
  {
    "roll_no": 54760,
    "first_name": "Divya",
    "last_name": "Reddy",
    "age": 16,
    "phone": "2109876543",
    "address": "Kolkata",
    "class": "10th",
    "division": "C"
  },
  {
    "roll_no": 54761,
    "first_name": "Karan",
    "last_name": "Mehta",
    "age": 18,
    "phone": "1098765432",
    "address": "Jaipur",
    "class": "12th",
    "division": "A"
  },
  {
    "roll_no": 54762,
    "first_name": "Pooja",
    "last_name": "Iyer",
    "age": 17,
    "phone": "9876543211",
    "address": "Lucknow",
    "class": "11th",
    "division": "B"
  },
  {
    "roll_no": 54763,
    "first_name": "Rajesh",
    "last_name": "Nair",
    "age": 16,
    "phone": "8765432110",
    "address": "Nagpur",
    "class": "10th",
    "division": "C"
  },
  {
    "roll_no": 54764,
    "first_name": "Sunita",
    "last_name": "Desai",
    "age": 18,
    "phone": "7654321109",
    "address": "Bhopal",
    "class": "12th",
    "division": "A"
  },
  {
    "roll_no": 54765,
    "first_name": "Arjun",
    "last_name": "Kapoor",
    "age": 17,
    "phone": "6543211098",
    "address": "Indore",
    "class": "11th",
    "division": "B"
  },
  {
    "roll_no": 54766,
    "first_name": "Meera",
    "last_name": "Banerjee",
    "age": 16,
    "phone": "5432110987",
    "address": "Patna",
    "class": "10th",
    "division": "C"
  },
  {
    "roll_no": 54767,
    "first_name": "Sanjay",
    "last_name": "Choudhary",
    "age": 18,
    "phone": "4321109876",
    "address": "Kanpur",
    "class": "12th",
    "division": "A"
  },
  {
    "roll_no": 54768,
    "first_name": "Ananya",
    "last_name": "Saxena",
    "age": 17,
    "phone": "3211098765",
    "address": "Agra",
    "class": "11th",
    "division": "B"
  },
  {
    "roll_no": 54769,
    "first_name": "Vivek",
    "last_name": "Trivedi",
    "age": 16,
    "phone": "2109876544",
    "address": "Varanasi",
    "class": "10th",
    "division": "C"
  },
  {
    "roll_no": 54770,
    "first_name": "Shreya",
    "last_name": "Mishra",
    "age": 18,
    "phone": "1098765433",
    "address": "Ludhiana",
    "class": "12th",
    "division": "A"
  },
  {
    "roll_no": 54771,
    "first_name": "Rohan",
    "last_name": "Agarwal",
    "age": 17,
    "phone": "9876543212",
    "address": "Amritsar",
    "class": "11th",
    "division": "B"
  },
  {
    "roll_no": 54772,
    "first_name": "Ishita",
    "last_name": "Bose",
    "age": 16,
    "phone": "8765432111",
    "address": "Chandigarh",
    "class": "10th",
    "division": "C"
  },
  {
    "roll_no": 54773,
    "first_name": "Aryan",
    "last_name": "Naidu",
    "age": 18,
    "phone": "7654321110",
    "address": "Coimbatore",
    "class": "12th",
    "division": "A"
  },
  {
    "roll_no": 54774,
    "first_name": "Tanvi",
    "last_name": "Rao",
    "age": 17,
    "phone": "6543211099",
    "address": "Visakhapatnam",
    "class": "11th",
    "division": "B"
  },
  {
    "roll_no": 54775,
    "first_name": "Aditya",
    "last_name": "Menon",
    "age": 16,
    "phone": "5432110988",
    "address": "Kochi",
    "class": "10th",
    "division": "C"
  },
  {
    "roll_no": 54776,
    "first_name": "Kavya",
    "last_name": "Pillai",
    "age": 18,
    "phone": "4321109877",
    "address": "Thiruvananthapuram",
    "class": "12th",
    "division": "A"
  },
  {
    "roll_no": 54777,
    "first_name": "Rajat",
    "last_name": "Chatterjee",
    "age": 17,
    "phone": "3211098766",
    "address": "Guwahati",
    "class": "11th",
    "division": "B"
  },
  {
    "roll_no": 54778,
    "first_name": "Swati",
    "last_name": "Das",
    "age": 16,
    "phone": "2109876545",
    "address": "Bhubaneswar",
    "class": "10th",
    "division": "C"
  },
  {
    "roll_no": 54779,
    "first_name": "Manish",
    "last_name": "Sen",
    "age": 18,
    "phone": "1098765434",
    "address": "Raipur",
    "class": "12th",
    "division": "A"
  },
  {
    "roll_no": 54780,
    "first_name": "Preeti",
    "last_name": "Ghosh",
    "age": 17,
    "phone": "9876543213",
    "address": "Ranchi",
    "class": "11th",
    "division": "B"
  },
  {
    "roll_no": 54781,
    "first_name": "Harsh",
    "last_name": "Dube",
    "age": 16,
    "phone": "8765432112",
    "address": "Dehradun",
    "class": "10th",
    "division": "C"
  },
  {
    "roll_no": 54782,
    "first_name": "Anushka",
    "last_name": "Rana",
    "age": 18,
    "phone": "7654321111",
    "address": "Shimla",
    "class": "12th",
    "division": "A"
  },
  {
    "roll_no": 54783,
    "first_name": "Yash",
    "last_name": "Chauhan",
    "age": 17,
    "phone": "6543211100",
    "address": "Srinagar",
    "class": "11th",
    "division": "B"
  },
  {
    "roll_no": 54784,
    "first_name": "Tanya",
    "last_name": "Bhatia",
    "age": 16,
    "phone": "5432110989",
    "address": "Jammu",
    "class": "10th",
    "division": "C"
  },
  {
    "roll_no": 54785,
    "first_name": "Ravi",
    "last_name": "Srivastava",
    "age": 18,
    "phone": "4321109878",
    "address": "Leh",
    "class": "12th",
    "division": "A"
  },
  {
    "roll_no": 54786,
    "first_name": "Sonia",
    "last_name": "Khanna",
    "age": 17,
    "phone": "3211098767",
    "address": "Dharamshala",
    "class": "11th",
    "division": "B"
  },
  {
    "roll_no": 54787,
    "first_name": "Alok",
    "last_name": "Bajaj",
    "age": 16,
    "phone": "2109876546",
    "address": "Gangtok",
    "class": "10th",
    "division": "C"
  },
  {
    "roll_no": 54788,
    "first_name": "Deepika",
    "last_name": "Chawla",
    "age": 18,
    "phone": "1098765435",
    "address": "Itanagar",
    "class": "12th",
    "division": "A"
  },
  {
    "roll_no": 54789,
    "first_name": "Vishal",
    "last_name": "Ganguly",
    "age": 17,
    "phone": "9876543214",
    "address": "Imphal",
    "class": "11th",
    "division": "B"
  },
  {
    "roll_no": 54790,
    "first_name": "Riya",
    "last_name": "Dutta",
    "age": 16,
    "phone": "8765432113",
    "address": "Aizawl",
    "class": "10th",
    "division": "C"
  },
  {
    "roll_no": 54791,
    "first_name": "Kunal",
    "last_name": "Sengupta",
    "age": 18,
    "phone": "7654321112",
    "address": "Kohima",
    "class": "12th",
    "division": "A"
  },
  {
    "roll_no": 54792,
    "first_name": "Nisha",
    "last_name": "Ahuja",
    "age": 17,
    "phone": "6543211101",
    "address": "Shillong",
    "class": "11th",
    "division": "B"
  },
  {
    "roll_no": 54793,
    "first_name": "Abhishek",
    "last_name": "Venkatesh",
    "age": 16,
    "phone": "5432110990",
    "address": "Agartala",
    "class": "10th",
    "division": "C"
  },
  {
    "roll_no": 54794,
    "first_name": "Pallavi",
    "last_name": "Iyengar",
    "age": 18,
    "phone": "4321109879",
    "address": "Dispur",
    "class": "12th",
    "division": "A"
  },
  {
    "roll_no": 54795,
    "first_name": "Gaurav",
    "last_name": "Kulkarni",
    "age": 17,
    "phone": "3211098768",
    "address": "Panaji",
    "class": "11th",
    "division": "B"
  },
  {
    "roll_no": 54796,
    "first_name": "Ankita",
    "last_name": "Mukherjee",
    "age": 16,
    "phone": "2109876547",
    "address": "Port Blair",
    "class": "10th",
    "division": "C"
  },
  {
    "roll_no": 54797,
    "first_name": "Ritesh",
    "last_name": "Hegde",
    "age": 18,
    "phone": "1098765436",
    "address": "Silvassa",
    "class": "12th",
    "division": "A"
  },
  {
    "roll_no": 54798,
    "first_name": "Shivani",
    "last_name": "Purohit",
    "age": 17,
    "phone": "9876543215",
    "address": "Daman",
    "class": "11th",
    "division": "B"
  },
  {
    "roll_no": 54799,
    "first_name": "Nikhil",
    "last_name": "Ranganathan",
    "age": 16,
    "phone": "8765432114",
    "address": "Pondicherry",
    "class": "10th",
    "division": "C"
  },
  {
    "roll_no": 54800,
    "first_name": "Sneha",
    "last_name": "Subramanian",
    "age": 18,
    "phone": "7654321113",
    "address": "Kavaratti",
    "class": "12th",
    "division": "A"
  },
  {
    "roll_no": 54801,
    "first_name": "Varun",
    "last_name": "Menon",
    "age": 17,
    "phone": "6543211102",
    "address": "New Delhi",
    "class": "11th",
    "division": "B"
  },
  {
    "roll_no": 54802,
    "first_name": "Jhanvi",
    "last_name": "Kohli",
    "age": 16,
    "phone": "5432110991",
    "address": "Gurgaon",
    "class": "10th",
    "division": "C"
  },
  {
    "roll_no": 54803,
    "first_name": "Rishabh",
    "last_name": "Sood",
    "age": 18,
    "phone": "4321109880",
    "address": "Noida",
    "class": "12th",
    "division": "A"
  },
  {
    "roll_no": 54804,
    "first_name": "Diksha",
    "last_name": "Bhandari",
    "age": 17,
    "phone": "3211098769",
    "address": "Faridabad",
    "class": "11th",
    "division": "B"
  },
  {
    "roll_no": 54805,
    "first_name": "Aakash",
    "last_name": "Chakraborty",
    "age": 16,
    "phone": "2109876548",
    "address": "Ghaziabad",
    "class": "10th",
    "division": "C"
  },
  {
    "roll_no": 54806,
    "first_name": "Mansi",
    "last_name": "Goswami",
    "age": 18,
    "phone": "1098765437",
    "address": "Meerut",
    "class": "12th",
    "division": "A"
  },
  {
    "roll_no": 54807,
    "first_name": "Pranav",
    "last_name": "Bakshi",
    "age": 17,
    "phone": "9876543216",
    "address": "Aligarh",
    "class": "11th",
    "division": "B"
  },
  {
    "roll_no": 54808,
    "first_name": "Ishaan",
    "last_name": "Gangrade",
    "age": 16,
    "phone": "8765432115",
    "address": "Moradabad",
    "class": "10th",
    "division": "C"
  },
  {
    "roll_no": 54809,
    "first_name": "Shivangi",
    "last_name": "Apte",
    "age": 18,
    "phone": "7654321114",
    "address": "Saharanpur",
    "class": "12th",
    "division": "A"
  },
  {
    "roll_no": 54810,
    "first_name": "Utkarsh",
    "last_name": "Dhawan",
    "age": 17,
    "phone": "6543211103",
    "address": "Jhansi",
    "class": "11th",
    "division": "B"
  },
  {
    "roll_no": 54811,
    "first_name": "Garima",
    "last_name": "Chaudhary",
    "age": 16,
    "phone": "5432110992",
    "address": "Mathura",
    "class": "10th",
    "division": "C"
  },
  {
    "roll_no": 54812,
    "first_name": "Siddhant",
    "last_name": "Grover",
    "age": 18,
    "phone": "4321109881",
    "address": "Bareilly",
    "class": "12th",
    "division": "A"
  },
  {
    "roll_no": 54813,
    "first_name": "Ananya",
    "last_name": "Malik",
    "age": 17,
    "phone": "3211098770",
    "address": "Rampur",
    "class": "11th",
    "division": "B"
  },
  {
    "roll_no": 54814,
    "first_name": "Dhruv",
    "last_name": "Khurana",
    "age": 16,
    "phone": "2109876549",
    "address": "Muzaffarnagar",
    "class": "10th",
    "division": "C"
  },
  {
    "roll_no": 54815,
    "first_name": "Kriti",
    "last_name": "Sarin",
    "age": 18,
    "phone": "1098765438",
    "address": "Hapur",
    "class": "12th",
    "division": "A"
  },
  {
    "roll_no": 54816,
    "first_name": "Raghav",
    "last_name": "Chawla",
    "age": 17,
    "phone": "9876543217",
    "address": "Bulandshahr",
    "class": "11th",
    "division": "B"
  },
  {
    "roll_no": 54817,
    "first_name": "Saumya",
    "last_name": "Arora",
    "age": 16,
    "phone": "8765432116",
    "address": "Etawah",
    "class": "10th",
    "division": "C"
  },
  {
    "roll_no": 54818,
    "first_name": "Aditi",
    "last_name": "Bhasin",
    "age": 18,
    "phone": "7654321115",
    "address": "Firozabad",
    "class": "12th",
    "division": "A"
  },
  {
    "roll_no": 54819,
    "first_name": "Yuvraj",
    "last_name": "Sethi",
    "age": 17,
    "phone": "6543211104",
    "address": "Mainpuri",
    "class": "11th",
    "division": "B"
  },
  {
    "roll_no": 54820,
    "first_name": "Ira",
    "last_name": "Bajpai",
    "age": 16,
    "phone": "5432110993",
    "address": "Shahjahanpur",
    "class": "10th",
    "division": "C"
  },
  {
    "roll_no": 54821,
    "first_name": "Kabir",
    "last_name": "Khanna",
    "age": 18,
    "phone": "4321109882",
    "address": "Etah",
    "class": "12th",
    "division": "A"
  },
  {
    "roll_no": 54822,
    "first_name": "Myra",
    "last_name": "Luthra",
    "age": 17,
    "phone": "3211098771",
    "address": "Hathras",
    "class": "11th",
    "division": "B"
  },
  {
    "roll_no": 54823,
    "first_name": "Rehan",
    "last_name": "Sibal",
    "age": 16,
    "phone": "2109876550",
    "address": "Badaun",
    "class": "10th",
    "division": "C"
  },
  {
    "roll_no": 54824,
    "first_name": "Kiara",
    "last_name": "Chadha",
    "age": 18,
    "phone": "1098765439",
    "address": "Pilibhit",
    "class": "12th",
    "division": "A"
  },
  {
    "roll_no": 54825,
    "first_name": "Vedant",
    "last_name": "Gera",
    "age": 17,
    "phone": "9876543218",
    "address": "Kasganj",
    "class": "11th",
    "division": "B"
  },
  {
    "roll_no": 54826,
    "first_name": "Trisha",
    "last_name": "Walia",
    "age": 16,
    "phone": "8765432117",
    "address": "Amroha",
    "class": "10th",
    "division": "C"
  },
  {
    "roll_no": 54827,
    "first_name": "Shaurya",
    "last_name": "Tandon",
    "age": 18,
    "phone": "7654321116",
    "address": "Sambhal",
    "class": "12th",
    "division": "A"
  },
  {
    "roll_no": 54828,
    "first_name": "Aarohi",
    "last_name": "Bedi",
    "age": 17,
    "phone": "6543211105",
    "address": "Chandausi",
    "class": "11th",
    "division": "B"
  },
  {
    "roll_no": 54829,
    "first_name": "Arnav",
    "last_name": "Chopra",
    "age": 16,
    "phone": "5432110994",
    "address": "Khurja",
    "class": "10th",
    "division": "C"
  },
  {
    "roll_no": 54830,
    "first_name": "Avni",
    "last_name": "Dhingra",
    "age": 18,
    "phone": "4321109883",
    "address": "Gonda",
    "class": "12th",
    "division": "A"
  },
  {
    "roll_no": 54831,
    "first_name": "Vihaan",
    "last_name": "Grewal",
    "age": 17,
    "phone": "3211098772",
    "address": "Bahraich",
    "class": "11th",
    "division": "B"
  },
  {
    "roll_no": 54832,
    "first_name": "Anvi",
    "last_name": "Sachdeva",
    "age": 16,
    "phone": "2109876551",
    "address": "Balrampur",
    "class": "10th",
    "division": "C"
  },
  {
    "roll_no": 54833,
    "first_name": "Atharv",
    "last_name": "Bali",
    "age": 18,
    "phone": "1098765440",
    "address": "Sitapur",
    "class": "12th",
    "division": "A"
  },
  {
    "roll_no": 54834,
    "first_name": "Ishana",
    "last_name": "Chaudhry",
    "age": 17,
    "phone": "9876543219",
    "address": "Lakhimpur",
    "class": "11th",
    "division": "B"
  },
  {
    "roll_no": 54835,
    "first_name": "Advait",
    "last_name": "Gandhi",
    "age": 16,
    "phone": "8765432118",
    "address": "Pratapgarh",
    "class": "10th",
    "division": "C"
  },
  {
    "roll_no": 54836,
    "first_name": "Amaira",
    "last_name": "Sarna",
    "age": 18,
    "phone": "7654321117",
    "address": "Raebareli",
    "class": "12th",
    "division": "A"
  },
  {
    "roll_no": 54837,
    "first_name": "Kiaan",
    "last_name": "Kohli",
    "age": 17,
    "phone": "6543211106",
    "address": "Sultanpur",
    "class": "11th",
    "division": "B"
  },
  {
    "roll_no": 54838,
    "first_name": "Navya",
    "last_name": "Mehra",
    "age": 16,
    "phone": "5432110995",
    "address": "Ambedkar Nagar",
    "class": "10th",
    "division": "C"
  },
  {
    "roll_no": 54839,
    "first_name": "Parth",
    "last_name": "Khanna",
    "age": 18,
    "phone": "4321109884",
    "address": "Shravasti",
    "class": "12th",
    "division": "A"
  },
  {
    "roll_no": 54840,
    "first_name": "Reyansh",
    "last_name": "Sodhi",
    "age": 17,
    "phone": "3211098773",
    "address": "Siddharthnagar",
    "class": "11th",
    "division": "B"
  },
  {
    "roll_no": 54841,
    "first_name": "Siya",
    "last_name": "Batra",
    "age": 16,
    "phone": "2109876552",
    "address": "Basti",
    "class": "10th",
    "division": "C"
  },
  {
    "roll_no": 54842,
    "first_name": "Ayaan",
    "last_name": "Chadha",
    "age": 18,
    "phone": "1098765441",
    "address": "Maharajganj",
    "class": "12th",
    "division": "A"
  },
  {
    "roll_no": 54843,
    "first_name": "Dia",
    "last_name": "Gill",
    "age": 17,
    "phone": "9876543220",
    "address": "Gorakhpur",
    "class": "11th",
    "division": "B"
  },
  {
    "roll_no": 54844,
    "first_name": "Aadi",
    "last_name": "Saini",
    "age": 16,
    "phone": "8765432119",
    "address": "Kushinagar",
    "class": "10th",
    "division": "C"
  },
  {
    "roll_no": 54845,
    "first_name": "Anaya",
    "last_name": "Bajwa",
    "age": 18,
    "phone": "7654321118",
    "address": "Deoria",
    "class": "12th",
    "division": "A"
  },
  {
    "roll_no": 54846,
    "first_name": "Aarav",
    "last_name": "Chhabra",
    "age": 17,
    "phone": "6543211107",
    "address": "Azamgarh",
    "class": "11th",
    "division": "B"
  },
  {
    "roll_no": 54847,
    "first_name": "Ishita",
    "last_name": "Dhillon",
    "age": 16,
    "phone": "5432110996",
    "address": "Mau",
    "class": "10th",
    "division": "C"
  },
  {
    "roll_no": 54848,
    "first_name": "Vivaan",
    "last_name": "Sarna",
    "age": 18,
    "phone": "4321109885",
    "address": "Ballia",
    "class": "12th",
    "division": "A"
  },
  {
    "roll_no": 54849,
    "first_name": "Kyra",
    "last_name": "Malhotra",
    "age": 17,
    "phone": "3211098774",
    "address": "Jaunpur",
    "class": "11th",
    "division": "B"
  },
  {
    "roll_no": 54850,
    "first_name": "Shivansh",
    "last_name": "Chaudhary",
    "age": 16,
    "phone": "2109876553",
    "address": "Ghazipur",
    "class": "10th",
    "division": "C"
  },
  {
    "roll_no": 54851,
    "first_name": "Zara",
    "last_name": "Khurana",
    "age": 18,
    "phone": "1098765442",
    "address": "Chandauli",
    "class": "12th",
    "division": "A"
  }
  ]);
  return (
    <>
      <h1>Students Table</h1>

      <center>
        <table border="1">
          <thead>
            <tr>
              <th>No</th>
              <th>Roll No</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Age</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Class</th>
              <th>Division</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {allStudents.map((student, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{student.roll_no}</td>
                <td>{student.first_name}</td>
                <td>{student.last_name}</td>
                <td>{student.age}</td>
                <td>{student.phone}</td>
                <td>{student.address}</td>
                <td>{student.class}</td>
                <td>{student.division}</td>
                <td>
                  <button>✍🏻</button>
                  <button>🗑</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </center>
    </>
  );
}

export default App;
