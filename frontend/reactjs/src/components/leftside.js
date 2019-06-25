import React, {Component} from 'react'

function ListMenu (props) {
    const list = [
        {
            title: 'Dashboard',
            link: '/dashboard',
            icon: 'fas fa-tachometer-alt',
            custom_class: 'nav-link-success',
            badge: 'NEW'
        },
        {
            title: 'Analisis Sentimen',
            icon: '',
            is_title: true
        },
        {
            title: 'Kosa Kata',
            link: '/kosa-kata',
            icon: 'fas fa-font'
        },
        {
            title: 'Kalimat Contoh',
            link: '/kalimat-contoh',
            icon: 'fas fa-superscript'
        },
        {
            title: 'Cek Kalimat',
            link: '/cek-kalimat',
            icon: 'fas fa-quote-right'
        },
        {
            title: 'Pengaturan',
            icon: '',
            is_title: true
        },
        {
            title: 'Halaman',
            link: '/halaman',
            icon: 'fas fa-cog'
        }
    ]
    return (
        <ul className="nav">
            {
                list.map(i => {
                    let liContent = ''
                    if (!i.is_title) {
                        const icon = 'nav-icon ' + i.icon
                        const classes = i.custom_class ? `nav-link ${i.custom_class}` : 'nav-link'
                        liContent = <a className={classes} href={i.link}>
                                        <i className={icon || ''}></i> {i.title}
                                        {i.badge ? <span className="badge badge-primary">{i.badge}</span> : ''}
                                    </a>
                    }
                    const titleClass = (i.is_title ? 'nav-title ' : 'nav-item ') + (i.title_class ? i.title_class : '')
                    return (<li className={titleClass} key={i.title}>
                        {i.is_title ? i.title : ''}
                        {liContent}
                    </li>)
                })
            }
        </ul>
    )
}

class LeftSide extends Component {
    render () {
        return (
            <div className="sidebar">
                <nav className="sidebar-nav">
                    <ListMenu/>
                </nav>
                <button className="sidebar-minimizer brand-minimizer" type="button"></button>
            </div>
        )
    }
}

export default LeftSide