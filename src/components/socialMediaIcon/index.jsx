import { SOCIAL_MEDIA } from "../../constant/data"
const SocialMediaIcon = () => {
    return (
        <div className="flex">
            {SOCIAL_MEDIA.map((item, ind) => (
                <div class="p-1 m-1">
                    <a href={item.href} target="_blank">
                        <img src={item.imageLink}
                            className="bg-white hover:bg-green-700"
                            style={{
                                padding: '10px',
                                borderRadius: '25%',
                                width: '40px',
                                height: '40px',
                                cursor: 'pointer',
                            }} />
                    </a>
                </div>
            ))}
        </div>

    )
}
export default SocialMediaIcon