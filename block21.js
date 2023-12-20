const COHORT = "2310-GHP-ET-WEB-FT-SF";
const API_URL = `https://fsa-crud-2aa9294fe819.herokuapp.com/api/2310-GHP-ET-WEB-FT-SF/events`;

const state = {
  Events: [],
};

const eventList = document.querySelector("list");

const form = document.querySelector("#addEvents");
addEventList.addEventListener("submit", addEvent);

/**
 * Sync state with the API and rerender
 */
async function render() {
  await getEvents();
  renderEvents(); 
}
render();

/**
 * Update state with events from API
 */
async function getEvents() {
  try {
    const response = await fetch(API_URL);
    const json = await response.json();
    console.log(response)
    state.artists = json.data;
  } catch (error) {
    console.error(error);
  }
}

/**
 * Render events from state
 */
function renderEvents() {
  console.log(state.Eventsvents)
  if (!state.Eventsvents.length) {
    PartyList.innerHTML = "<li>No events.</li>";
    return;
  }

  const getEvents = state.Events.map((event) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <h2>${event.name}</h2>
      <img src="${event.imageUrl}" alt="${event.name}" />
      <p>${event.description}</p>
    `;
    return li;
  });

  eventList.replaceChildren(...eventCards);
}

/**
 * Ask the API to create a new event based on form data
 * @param {Event} event
 */
async function addEvent(event) {
  event.preventDefault();

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      body: JSON.formData({
        name: addEventList.name.value,
        date: addEventList.date.value,
        time: addEventList.time.value,
        location: addEventList.location.value,
        description: addEventList.description.value,
      }),
    });

    if (!response.ok) {
        console.log('Event created successfully!')
      throw new Error("Failed to create event");
    }

    render();
  } catch (error) {
    console.error(error);
  }
}const deleteButton = document.createElement('button');
deleteButton.textContent = 'Delete';

deleteButton.addEventListener('click', async () => {
  const deleteResponse = await fetch(`API_URL/event/${event.id}`, {
    method: 'DELETE',
  });

  if (deleteResponse.ok) {
    li.remove();
  } else {
    console.error('Failed to delete event.');
  }
});

li.appendChild(deleteButton);
partyList.appendChild(li);
;


getEvents();
