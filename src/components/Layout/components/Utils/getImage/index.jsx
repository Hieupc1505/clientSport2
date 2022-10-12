import { getImageLink } from "../../../../../redux/actions";
const handleErrorImage = async (e, id) => {
    const url = await getImageLink(id);
    e.target.src = url;
    // return url;
};

export default handleErrorImage;
