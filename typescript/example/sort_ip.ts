// Sort by IP address in ascending order
export const compareIPAsc = (a: string, b: string) => {
    // Convert IP to decimal
    const ip1IntoDecimal = a.split('.').reduce((acc, octet, index) => acc + parseInt(octet, 10) * Math.pow(256, 3 - index), 0);
    const ip2IntoDecimal = b.split('.').reduce((acc, octet, index) => acc + parseInt(octet, 10) * Math.pow(256, 3 - index), 0);

    return ip1IntoDecimal - ip2IntoDecimal;
}

// Sort by IP address in descending order
export const compareIPDesc = (a: string, b: string) => {
    // Convert IP to decimal
    const ip1IntoDecimal = a.split('.').reduce((acc, octet, index) => acc + parseInt(octet, 10) * Math.pow(256, 3 - index), 0);
    const ip2IntoDecimal = b.split('.').reduce((acc, octet, index) => acc + parseInt(octet, 10) * Math.pow(256, 3 - index), 0);

    return ip2IntoDecimal - ip1IntoDecimal;
}