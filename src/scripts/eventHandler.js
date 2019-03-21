const handleDelete = () => {
    console.log("the event", event.target.id.split("--")[1]);
    api.deletePark(event.target.id.split("--")[1])
    .then(api.getParks)
}