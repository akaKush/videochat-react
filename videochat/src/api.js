const newRoomEndpoint =
  'https://fu6720epic.execute-api.us-west-2.amazonaws.com/default/dailyWwwApiDemoNewCall';

/**
 * Això crea una sala de curta duració NOMÉS PER propòsits DEMOSTRATIUS
 *
 * IMPORTANT: Això és exclusivament una demo, per tant no és viable
 * si volem utilitzar-la a nivell de producció.
 * Si volem crear sales per producció, és millor utilitzar la API de Daily
 * directament des del nostre servidor, o desde la Dashboard de Daily
 * si les volem crear manualment.
 * 
 * Per més informació sobre com utilitzar la API de Daily, consultar a:
 * https://docs.daily.co/reference#create-room
 */

 
async function createRoom() {
  let response = await fetch(newRoomEndpoint),
    room = await response.json();
  return room;

  // Comment out the above and uncomment the below, using your own URL
  // return { url: "https://your-domain.daily.co/hello" };
}

export default { createRoom };
