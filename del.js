const obj = {
    name: "DJ",
    age: 20,
    printName: () => {
        console.log("DJ");
    },
};

const { name, age } = obj;

console.log(name, age);

const menuLinks = [
    { name: "Company", link: "/company" },
    { name: "Student", link: "/students" },
    { name: "Jobs", link: "/jobs" },
    { name: "History", link: "/history" },
];

menuLinks.map((e) => {
    console.log(e.link + " " + e.name);
});
