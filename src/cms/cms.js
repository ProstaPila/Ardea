import CMS from 'netlify-cms'
import OnasPagePreview from './preview-templates/OnasPagePreview'
import WycenyPagePreview from './preview-templates/WycenyPagePreview'
import KontaktPagePreview from './preview-templates/KontaktPagePreview'
import SpecjalistycznePagePreview from './preview-templates/SpecjalistycznePagePreview'
import WspolpracaPagePreview from './preview-templates/WspolpracaPagePreview'
import DoradzctwoPagePreview from './preview-templates/DoradzctwoPagePreview'
import ObslugaPagePreview from './preview-templates/ObslugaPagePreview'


CMS.registerPreviewStyle('/styles.css')
CMS.registerPreviewTemplate('specjalistyczne', SpecjalistycznePagePreview)
CMS.registerPreviewTemplate('doradzctwo', DoradzctwoPagePreview)
CMS.registerPreviewTemplate('wspolpraca', WspolpracaPagePreview)
CMS.registerPreviewTemplate('onas', OnasPagePreview)
CMS.registerPreviewTemplate('wyceny', WycenyPagePreview)
CMS.registerPreviewTemplate('kontakt', KontaktPagePreview)