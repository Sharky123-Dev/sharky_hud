-- Resource Metadata
fx_version 'cerulean'
games { 'rdr3', 'gta5' }

author 'Sharky-Scripts'
description 'Sharky Huds'
version '1.0.0'

-- What to run
client_scripts {
    'configs/*.lua',
    'client/*.lua'
}

ui_page_preload "yes"
ui_page "html/index.html"

files {
    "configs/*.js",
	"html/css/*",
	"html/js/*",
	"html/img/*",
	"html/*"
}

exports {
	'SendNoty'
}