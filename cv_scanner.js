console.log('this is cv scanner');

const data = [
    {
        name: 'rohit sharma',
        age: 32,
        city: 'pune',
        language: "python",
        framework: 'odoo',
        image: 'https://randomuser.me/api/portraits/men/24.jpg'
    },

    {
        name: 'ashok dinda',
        age: 22,
        city: 'chennai',
        language: "Go",
        framework: 'Go framedom',
        image: 'https://randomuser.me/api/portraits/men/94.jpg'
    },

    {
        name: 'preeti khanna',
        age: 20,
        city: 'mumbai',
        language: "java",
        framework: 'json lib',
        image: 'https://randomuser.me/api/portraits/women/4.jpg'
    },

    {
        name: 'akshay desai',
        age: 42,
        city: 'Delhi',
        language: "machine learning",
        framework: 'Pycham',
        image: 'https://randomuser.me/api/portraits/men/64.jpg'
    },

    {
        name: 'urmila kalavadiya',
        age: 32,
        city: 'Rajkot',
        language: "Cpp",
        framework: 'Vs Code',
        image: 'https://randomuser.me/api/portraits/women/51.jpg'
    },

    {
        name: 'utsav bhatt',
        age: 23,
        city: 'jaipur',
        language: "perl",
        framework: 'perl frame',
        image: 'https://randomuser.me/api/portraits/men/21.jpg'
    },

    {
        name: 'shital mahera',
        age: 44,
        city: 'kashmir',
        language: "C language",
        framework: 'linux mint',
        image: 'https://randomuser.me/api/portraits/women/11.jpg'
    }
]


//CV Iterator 
function cvIterrator(profiles) {
    let nextIndex = 0;
    return {
        next: function () {
            return nextIndex < profiles.length ?
                { value: profiles[nextIndex++], done: false } :
                { done: true }
        }
    };
}

const candidates = cvIterrator(data);

nextCV();
const next = document.getElementById('next');
next.addEventListener('click', nextCV);

function nextCV() {
    const currentCandidate = candidates.next().value;
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if (currentCandidate != undefined) {

        image.innerHTML = `<img id="image" src="${currentCandidate.image}">`;

        profile.innerHTML = `<ul class="list-group">
        <li class="list-group-item">Name : ${currentCandidate.name}</li>
        <li class="list-group-item"> ${currentCandidate.age} years old</li>
        <li class="list-group-item"> Lives in ${currentCandidate.city}</li>
        <li class="list-group-item"> primarly works on ${currentCandidate.language}</li>
        <li class="list-group-item">use ${currentCandidate.framework} framework</li>
        </ul>`;
    }
    else {
        alert('End of Candidtes Application');
        window.location.reload();
    }
}
