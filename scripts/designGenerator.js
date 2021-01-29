// get data from local storage
let dis_in_Storage = localStorage.getItem('distance VS classroom');
let edlev_in_Storage = localStorage.getItem('educational level');
let sub_in_Storage = localStorage.getItem('subject');
let bloom_in_Storage = localStorage.getItem('bloom');
let time_in_Storage = localStorage.getItem('time');
let student_in_Storage = localStorage.getItem('student amount');
// design object
const designData = [
  {
    id: 1,
    name: 'History of world war II',
    description:
      'Decide which is the best summary of the history of world war II among those provided in class and give your reasons.',
    author: '',
    link: './previews/preview1.html',
    minutes: 'Less than 10 minutes',
    distanceClassroom: 'In the Classroom',
    educationlevel: 'Lower Secondary Education',
    studentamount: 'Less than 10 students',
    subject: 'Humanities and Arts',
    time: ' Less than 10 minutes',
    bloom: 'Evaluation',
  },
  {
    id: 2,
    name: 'Historical eras',
    description: 'Assess the quality of the five main historical eras presented in the history timeline.',
    author: '',
    link: './previews/preview2.html',
    minutes: '120 minutes',
    distanceClassroom: 'Distance Learning',
    educationlevel: 'Bachelor or Equivalent',
    studentamount: 'Less than 10 students',
    subject: 'Humanities and Arts',
    time: 'Less than 10 minutes',
    bloom: 'Evaluation',
  },
  {
    id: 3,
    name: 'Art painting styles',
    description:
      'Define, from the theoretical perspective, what are the main concepts of Expressionism and Surrealism.',
    author: '',
    link: './previews/preview3.html',
    minutes: '120 minutes',
    distanceClassroom: 'Distance Learning',
    educationlevel: 'Lower Secondary Education',
    studentamount: 'Less than 10 students',
    subject: 'Humanities and Arts',
    time: 'Less than 10 minutes',
    bloom: 'remember',
  },
  {
    id: 4,
    name: "Shakespeare's Monologue",
    description:
      'Evaluate if the monologue watched in class could be considered a  Shakespearian monologue based on the authors’ style and historical characteristics',
    author: '',
    link: './previews/preview4.html',
    minutes: '120 minutes',
    distanceClassroom: 'Distance Learning',
    educationlevel: 'Bachelor or Equivalent',
    studentamount: 'Lower Secondary Education',
    subject: 'Humanities and Arts',
    time: 'Between 10-20 mins',
    bloom: 'Evaluate',
  },
  {
    id: 5,
    name: 'Network evaluation',
    description: 'Judge WAN and LAN based on the security issues.',
    author: '',
    link: './previews/preview5.html',
    minutes: '120 minutes',
    distanceClassroom: 'Distance Learning',
    educationlevel: 'Lower Secondary Education',
    studentamount: 'Less than 10 students',
    subject: 'Engineering, Manufacturing & Construction',
    time: ' Less than 10 minutes',
    bloom: 'Evaluate',
  },
  {
    id: 6,
    name: 'Types of instruments',
    description:
      'Find errors within classification of instruments provided in class according to the following types: percussion, stringed, keyboard, wind, and electronic.',
    author: '',
    link: './previews/preview6.html',
    minutes: '120 minutes',
    distanceClassroom: 'Distance Learning',
    educationlevel: 'Lower Secondary Education',
    studentamount: 'Between 30-40 students',
    subject: 'Humanities and Arts',
    time: 'more than 40 min',
    bloom: 'Evaluate',
  },
  // {
  //   name: 'Metodología Docente',
  //   description:
  //     '¿Qué ventajas e inconvenientes destacarías del uso de múltiples estrategias metodológicas de E-A para atender la diversidad del estudiantado?',
  //   author: 'Verónica',
  //   link: 'https://ilde.upf.edu/pg/lds/vieweditor/14229/',
  //   minutes: '120 minutes',
  //   distanceClassroom: 'In the Classroom',
  //   educationlevel: 'Early Childhood Education',
  //   studentamount: 'Between 30-40 students',
  //   subject: 'Humanities and Arts',
  //   time: 'More than 40 mins',
  //   bloom: 'Analysis',
  // },
  // {
  //   name: 'Asking questions to peers',
  //   description: 'Ask a question to the peers that have presented',
  //   author: 'Davinia',
  //   link: 'https://ilde.upf.edu/pg/lds/vieweditor/14229/',
  //   minutes: '120 minutes',
  //   distanceClassroom: 'Distance Learning',
  //   educationlevel: 'Post Secndary non-tertiary',
  //   studentamount: 'Less than 10 students',
  //   subject: 'Agriculture',
  //   time: 'More than 40 mins',
  //   bloom: 'Apply',
  // },
  // {
  //   name: 'Questions about Science communication',
  //   description: 'Propose a question for the groups having studied "Science communication',
  //   author: 'Davinia',
  //   link: 'https://ilde.upf.edu/pg/lds/vieweditor/14229/',
  //   minutes: '120 minutes',
  //   distanceClassroom: 'Distance Learning',
  //   educationlevel: 'Upper Secondary Education',
  //   studentamount: 'Less than 10 students',
  //   subject: 'General Programmes',
  //   time: 'Between 10-20 mins',
  //   bloom: 'Remember',
  // },
  // {
  //   name: 'Questions about Science communication',
  //   description: 'Propose a question for the groups having studied "Science communication',
  //   author: 'Davinia',
  //   link: 'https://ilde.upf.edu/pg/lds/vieweditor/14229/',
  //   minutes: '120 minutes',
  //   distanceClassroom: 'Distance Learning',
  //   educationlevel: 'Bachelor or Equivalent',
  //   studentamount: 'Less than 10 students',
  //   subject: 'Health & Wellfare',
  //   time: 'Between 30-40 mins',
  //   bloom: 'Create',
  // },
];

function dis(dist) {
  if (dis_in_Storage == dist) {
    console.log(dist);
    return `<div class="alert alert-success" role="alert">
    ${dist}</span>
    </div>`;
  } else {
    return ``;
  }
}

function edlevel(educationlevel) {
  if (edlev_in_Storage == educationlevel) {
    console.log(educationlevel);
    return `<div class="alert alert-success" role="alert">
    ${educationlevel}</span>
    </div>`;
  } else {
    return ``;
  }
}
function amount(stu) {
  if (student_in_Storage == stu) {
    console.log(stu);
    return `<div class="alert alert-success" role="alert">
    ${stu}</span>
    </div>`;
  } else {
    return ``;
  }
}
//subject generator tag
function sub(subject) {
  if (sub_in_Storage == subject) {
    console.log(subject);
    return `<div class="alert alert-success" role="alert">
            ${subject}</span>
            </div>`;
  } else {
    return ``;
  }
} // end of subject function

function timey(time) {
  if (time_in_Storage == time) {
    console.log(time);
    return `<div class="alert alert-success" role="alert">
    ${time}</span>
    </div>`;
  } else {
    return ``;
  }
}
function bloomy(bloom) {
  if (bloom_in_Storage == bloom) {
    console.log(bloom);
    return `<div class="alert alert-success" role="alert">
    ${bloom}</span>
    </div>`;
  } else {
    return ``;
  }
}

function foods(foods) {
  return `
  <h4>Favorite Foods</h4>
  <ul class="foods-list">
  ${foods.map((food) => `<li>${food}</li>`).join('')}
  </ul>
  `;
}
function designTemplate(design) {
  return `
  <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4 mt-5">
     <div class="card bg-light mb-3" style="18rm">
      <div class="card-body">
      
        <h5 class="card-title">${design.name}</h5>
         <p class="card-text">${design.description} </p>
              <a href="${design.link}" class="btn btn-primary btn-sm"
                >Preview</a
              >
              <button type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#confirmModal">Select</button>
              <p></p>
              ${dis(design.distanceClassroom)}
              ${edlevel(design.educationlevel)}
              ${amount(design.studentamount)}
              ${sub(design.subject)}
              ${timey(design.time)}
              ${bloomy(design.bloom)}

            </div>
          </div>
        </div>
    `;
}
// function petTemplate(pet) {
//   return `
//       <div class="animal">
//       <img class="pet-photo" src="${pet.photo}">
//       <h2 class="pet-name">${pet.name} <span class="species">(${pet.species})</span></h2>
//       <p><strong>Age:</strong> ${age(pet.birthYear)}</p>
//       ${pet.favFoods ? foods(pet.favFoods) : ''}
//       </div>
//     `;
// }

// document.getElementById('app').innerHTML = `
//     <h1 class="app-title">Pets (${designData.length} results)</h1>
//     ${designData.map(petTemplate).join('')}
//     <p class="footer">These ${designData.length} pets were added recently. Check back soon for updates.</p>
//   `;
document.getElementById('app').innerHTML = `
  
  ${designData.map(designTemplate).join('')}
  
`;
