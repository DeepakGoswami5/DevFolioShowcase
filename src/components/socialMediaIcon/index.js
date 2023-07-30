import { SOCIAL_MEDIA } from "../../constant/data"
const SocialMediaIcon = () => {
    return (
        <div className="flex rounded-full bg-black">
            {SOCIAL_MEDIA.map((item, ind) => (
                <div class="p-2 m-2">
                    <a href={item.href} target="_blank">
                        <img src={item.imageLink} style={{ padding: '10px', borderRadius: '25%', background: 'white', width: '40px', height: '40px' }} />
                    </a>
                </div>
            ))}
        </div>

    )
}
export default SocialMediaIcon