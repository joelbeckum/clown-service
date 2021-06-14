import { Reservations } from "./Reservations.js"
import { ServiceForm } from "./ServiceForm.js"


export const ClownService = () => {
    return `
    <h1>Buttons Clown Rentals</h1>
    <section class="serviceForm">
    ${ServiceForm()}
    </section>

    <section class="reservations">
        <h2>Reservations</h2>
        ${Reservations()}
    </section>
    `
}