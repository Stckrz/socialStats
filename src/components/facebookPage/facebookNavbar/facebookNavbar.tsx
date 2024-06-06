import { FaBell } from 'react-icons/fa'
import facebookLogo from 'src/library/logos/facebook-5221.svg'
import facebookMobileLogo from 'src/library/logos/facebook-5-logo-svgrepo-com.svg'
import { BsFillGrid3X3GapFill } from 'react-icons/bs'
import { FaFacebookMessenger } from 'react-icons/fa'
import profile from 'src/library/images/profileImage.jpeg';
import { useViewport } from 'src/hooks/useViewport'
import { useEffect } from 'react'

const FacebookNavbar: React.FC = () => {
	const width = useViewport().width;
	useEffect(()=>{},[width])

	return (
		<div className={"w-full border-b-2 border-t-2 border-facebookGrayBorder items-center justify-between bg-facebookGrayLight flex relative"}>
			{width < 800
				? <img className={"m-0 p-0 h-14 aspect-video"} src={facebookMobileLogo} />
				: <img className={"m-0 h-14 border-facebookGrayLight border-8 rounded-full"} src={facebookLogo} />
			}
			<div className={"m-2 flex gap-2"}>
				<div className={"aspect-square bg-facebookGrayBorder h-full rounded-full p-2"}>
					<BsFillGrid3X3GapFill className={"text-facebookLightIcon"} size={"1.2em"} />
				</div>
				<div className={"aspect-square bg-facebookGrayBorder h-full rounded-full p-2"}>
					<FaFacebookMessenger className={"text-facebookLightIcon"} size={"1.2em"} />
				</div>
				<div className={"aspect-square bg-facebookGrayBorder h-full rounded-full p-2"}>
					<FaBell className={"text-facebookLightIcon"} size={"1.2em"} />
				</div>
				<div className={"aspect-square bg-facebookGrayBorder h-full rounded-full"}>
						<img style={{height: "2.2em"}} className={"rounded-full object-fill h-full w-full"} src={profile} />
				</div>
			</div>
		</div>
	)
}
export default FacebookNavbar
