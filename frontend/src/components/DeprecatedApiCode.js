const [stages, setStages] = useState([]);
const [steps, setSteps] = useState({});

const fetchRoadmaps = (stage) => {
  fetch("/api/roadmaps")
    .then((response) => response.json())
    .then((data) => setTitle(data[stage].text));
};

const fetchStages = (roadmap) => {
  fetch(`/api/stages/${roadmap}`)
    .then((response) => response.json())
    .then((data) => {
      const new_stage = [];

      for (var i = 0; i < data.length; i++) {
        const stage = data[i]["fields"]["text"];
        new_stage.push(stage);
      }
      setStages(new_stage);
    });
};

const fetchSteps = (stage) => {
  const new_steps = [];
  fetch(`/api/steps/Week2`)
    .then((response) => response.json())
    .then((data) => {
      new_steps.push(data);
    });
};

useEffect(() => {
  fetchRoadmaps(defaultRoadmap);
  fetchStages(defaultRoadmap + 1);
  fetchSteps(stages[0]);
}, []);
