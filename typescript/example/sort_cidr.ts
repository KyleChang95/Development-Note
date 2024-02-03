// Sort by CIDR in ascending order
export const compareCidrAsc = (a: string, b: string) => {
    const [ip1, mask1] = a.split('/');
    const [ip2, mask2] = b.split('/');

    // Convert IP to decimal
    const ip1IntoDecimal = ip1.split('.').reduce((acc, octet, index) => acc + parseInt(octet, 10) * Math.pow(256, 3 - index), 0);
    const ip2IntoDecimal = ip2.split('.').reduce((acc, octet, index) => acc + parseInt(octet, 10) * Math.pow(256, 3 - index), 0);

    // Sort by IP address first, and then by subnet mask
    if (ip1IntoDecimal !== ip2IntoDecimal) {
        return ip1IntoDecimal - ip2IntoDecimal;
    } else {
        return Number(mask1) - Number(mask2);
    }
};

// Sort by CIDR in descending order
export const compareCidrDesc = (a: string, b: string) => {
    const [ip1, mask1] = a.split('/');
    const [ip2, mask2] = b.split('/');

    // Convert IP to decimal
    const ip1IntoDecimal = ip1.split('.').reduce((acc, octet, index) => acc + parseInt(octet, 10) * Math.pow(256, 3 - index), 0);
    const ip2IntoDecimal = ip2.split('.').reduce((acc, octet, index) => acc + parseInt(octet, 10) * Math.pow(256, 3 - index), 0);

    // Sort by IP address first, and then by subnet mask in descending order
    if (ip1IntoDecimal !== ip2IntoDecimal) {
        return ip2IntoDecimal - ip1IntoDecimal;
    } else {
        return Number(mask2) - Number(mask1);
    }
};