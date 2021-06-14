import { getRequests } from "./dataAccess.js"

export const Reservations = () => {
    const reservations = getRequests()

    let html = '<ul>'

    const listItems = reservations.map(reservation => {
                        return `<li>
                            Party of ${reservation.childrenAttending} for ${reservation.childName} on ${reservation.dateOfParty}
                        </li>`
    })

    html += listItems.join("")
    html += '</ul>'

    return html
}