import PageHeader from "@/components/page-header"
import ThemesTabs from "./tabs"

export default function Themes() {
    return <>
        <PageHeader header="Add colors. Make it yours." desc="Hand-picked themes that you can copy and paste into your apps.">
        </PageHeader>

        <ThemesTabs/>
    </>
}