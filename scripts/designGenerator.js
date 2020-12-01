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
    name: 'Collaborative idea generation',
    descriptio:
      'In this activity, you will have to propose an idea for our design project: Build a robot that helps children learn mathematics. At the initial level you will have to propose the idea and during the discussions you will need to point advantages and disadvantages of the proposed ideas. In the final level you will have to conclude in one idea.',
    author: 'Konmich',
    link: 'https://ilde.upf.edu/pg/lds/vieweditor/12988/',
    minutes: '120 minutes',
    distanceClassroom: 'Distance Learning',
    educationlevel: 'Bachelor or Equivalent',
    studentamount: 'Less than 10 students',
    subject: 'Social Science, Business & Law',
    time: 'Between 10-20 mins',
    bloom: 'Analysis',
  },
  {
    name: 'Metodología Docente',
    description:
      '¿Qué ventajas e inconvenientes destacarías del uso de múltiples estrategias metodológicas de E-A para atender la diversidad del estudiantado?',
    author: 'Verónica',
    link: 'https://ilde.upf.edu/pg/lds/vieweditor/14229/',
    minutes: '120 minutes',
    distanceClassroom: 'Distance Learning',
    educationlevel: 'Bachelor or Equivalent',
    studentamount: 'Less than 10 students',
    subject: 'Social Science, Business & Law',
    time: 'Between 10-20 mins',
    bloom: 'Remember',
  },
  {
    name: 'ITIC Class Activity',
    description:
      '¿Qué consejo/s sobre privacidad de datos y riesgos relacionados con la compartición de datos le darías a un/a amigo/a? (En dos frases máximo).',
    author: 'IshA',
    link: 'https://ilde.upf.edu/pg/lds/vieweditor/14229/',
    minutes: '120 minutes',
    distanceClassroom: 'Distance Learning',
    educationlevel: 'Doctoral or Equivalent',
    studentamount: 'Less than 10 students',
    subject: 'Science',
    time: 'Between 10-20 mins',
    bloom: 'Understand',
  },
  {
    name: 'ITIC Class Activity',
    description:
      '¿Qué consejo/s sobre privacidad de datos y riesgos relacionados con la compartición de datos le darías a un/a amigo/a? (En dos frases máximo).',
    author: 'IshA',
    link: 'https://ilde.upf.edu/pg/lds/vieweditor/14229/',
    minutes: '120 minutes',
    distanceClassroom: 'Distance Learning',
    educationlevel: 'Bachelor or Equivalent',
    studentamount: 'Less than 10 students',
    subject: 'Social Science, Business & Law',
    time: 'Between 10-20 mins',
    bloom: 'Remember',
  },
  {
    name: '¿Qué curso preparías utilizando estas herramientas?',
    description: 'Elegir un tema para desarrollar con estas herramientas',
    author: 'Karina Chappell Alaniz',
    link: 'https://ilde.upf.edu/pg/lds/vieweditor/14229/',
    minutes: '120 minutes',
    distanceClassroom: 'In the Classroom',
    educationlevel: 'Short-Cycle Tertiary',
    studentamount: 'Less than 10 students',
    subject: 'Services',
    time: 'More than 40 mins',
    bloom: 'Remember',
  },
  {
    name: 'Aspecto del seminario que más te ha interesado',
    description: 'Indica el aspecto del seminario que más te ha interesado',
    author: 'Davinia',
    link: 'https://ilde.upf.edu/pg/lds/vieweditor/14229/',
    minutes: '120 minutes',
    distanceClassroom: 'In the Classroom',
    educationlevel: 'Short-Cycle Tertiary',
    studentamount: 'Between 30-40 students',
    subject: 'Engineering, Manufacturing & Construction',
    time: 'Between 30-40 mins',
    bloom: 'Evaluate',
  },
  {
    name: 'Metodología Docente',
    description:
      '¿Qué ventajas e inconvenientes destacarías del uso de múltiples estrategias metodológicas de E-A para atender la diversidad del estudiantado?',
    author: 'Verónica',
    link: 'https://ilde.upf.edu/pg/lds/vieweditor/14229/',
    minutes: '120 minutes',
    distanceClassroom: 'In the Classroom',
    educationlevel: 'Early Childhood Education',
    studentamount: 'Between 30-40 students',
    subject: 'Humanities and Arts',
    time: 'More than 40 mins',
    bloom: 'Analysis',
  },
  {
    name: 'Asking questions to peers',
    description: 'Ask a question to the peers that have presented',
    author: 'Davinia',
    link: 'https://ilde.upf.edu/pg/lds/vieweditor/14229/',
    minutes: '120 minutes',
    distanceClassroom: 'Distance Learning',
    educationlevel: 'Post Secndary non-tertiary',
    studentamount: 'Less than 10 students',
    subject: 'Agriculture',
    time: 'More than 40 mins',
    bloom: 'Apply',
  },
  {
    name: 'Questions about Science communication',
    description: 'Propose a question for the groups having studied "Science communication',
    author: 'Davinia',
    link: 'https://ilde.upf.edu/pg/lds/vieweditor/14229/',
    minutes: '120 minutes',
    distanceClassroom: 'Distance Learning',
    educationlevel: 'Upper Secondary Education',
    studentamount: 'Less than 10 students',
    subject: 'General Programmes',
    time: 'Between 10-20 mins',
    bloom: 'Remember',
  },
  {
    name: 'Questions about Science communication',
    description: 'Propose a question for the groups having studied "Science communication',
    author: 'Davinia',
    link: 'https://ilde.upf.edu/pg/lds/vieweditor/14229/',
    minutes: '120 minutes',
    distanceClassroom: 'Distance Learning',
    educationlevel: 'Bachelor or Equivalent',
    studentamount: 'Less than 10 students',
    subject: 'Health & Wellfare',
    time: 'Between 30-40 mins',
    bloom: 'Create',
  },
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
              <a href="${design.link}" target="_blank" class="btn btn-primary btn-sm"
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
