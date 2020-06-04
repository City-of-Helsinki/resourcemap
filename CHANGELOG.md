# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),

## [Unreleased]
### Added
- Add closed state for tooltip groups
- Add "you are here" label into map legend
- Add not bookable state into map legend

### Changed
- Use pattern instead of solid colour for taken rooms
- Use a font sizes larger or as large as 15px
- Change not reservable colour into blue and selected colour into white
- Don't show availability status for machine room

### Fixed
- Fix untranslated "you are here" label
- Fix wrong font family for "you are here" label
- Fix room data for retro Gaming corner, Gaming hall and Kuutio
- Fix translations coverstitch machine, printing room and language menu
- Fix naming of Studio 1
- FIx game room order

## [0.1.0] - 2020-04-16
### Added
- Add QR link to Varaamo
- Add KuVa infrastructure ([#9](https://github.com/City-of-Helsinki/resourcemap/pull/9))
- Add missing translations (405a7b836443ef75ca61c9b8b7b71c28416b87bf)
- Add new rooms to map (fa694a48d55aabd3d72b8062f6062f91abebfebb)
- Add space name fetching from respa for resources that are connected to respa (5bb6c0aa54bd809384d75f4af35f824b63ed66cf)
- Add description for spaces that have them (ad34b5c62544b2c56a65a3e1c5f5ad18b3e99052)
- Add grouped view option into tooltip (1b48f7b068f61e8e051d5879c3518f7360f96f96)
- Add grid view option into tooltip (6896f064f6a7a6ff9b0886ab251b452ba2743ee8)
- Add label for next interesting time in tooltip (879d2a6ebdbc399794af4f8a955cbdb1928626d4)

### Changed
- Change into a dark theme (27e1462b2229cadff09573f88182387be211acb7)
- Change layout to column from row ([#13](https://github.com/City-of-Helsinki/resourcemap/pull/13))
- Change category order (3860ea893b0acfc88606934dd265d07d71fd8c9a)
- Change terminology used in labeling availability (f4dc15f3aef56eea691f4ddc1202d4bef23bdc80)
- Move font sizes into theme (055c639d4d81a5663a217ba05f7680b67b1764cf)

### Security
- Resolve security vulnerabilities (becea5814ee63dc11a3599253fc5f539099ce616, 7e34d7cf73aaa0110f9da2e6900d264f47ca5299, a62df6086c774ce7f8d40e29df37d1985af1d400, bbf90a2, e7a14a8, dabab22)

## [<0.1.0]

A changelog was not kept for the first versions of the software.