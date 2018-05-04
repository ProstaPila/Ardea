import CMS from 'netlify-cms'
import OnasPagePreview from './preview-templates/OnasPagePreview'
import WycenyPostPreview from './preview-templates/WycenyPostPreview'
import KontaktPagePreview from './preview-templates/KontaktPagePreview'
import SpecjalistycznePostPreview from './preview-templates/SpecjalistycznePostPreview'
import WspolpracaPagePreview from './preview-templates/WspolpracaPagePreview'
import DoradzctwoPagePreview from './preview-templates/DoradzctwoPagePreview'
import ObslugaPagePreview from './preview-templates/ObslugaPagePreview'


CMS.registerPreviewStyle('/styles.css')
CMS.registerPreviewTemplate('specjalistyczne', SpecjalistycznePostPreview)
CMS.registerPreviewTemplate('doradzctwo', DoradzctwoPagePreview)
CMS.registerPreviewTemplate('wspolpraca', WspolpracaPagePreview)
CMS.registerPreviewTemplate('onas', OnasPagePreview)
CMS.registerPreviewTemplate('wyceny', WycenyPostPreview)
CMS.registerPreviewTemplate('kontakt', KontaktPagePreview)