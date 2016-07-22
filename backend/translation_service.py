from googleapiclient.discovery import build
from langdetect import detect

# TODO: add APIKey to settings
service = build('translate', 'v2', developerKey='AIzaSyCxVnJWq8MxP5gtedjD-ZCjmGCJ_Moy4gA')

def translate_to_en(input_text):
    source = detect(input_text)
    translated = service.translations().list(q = input_text,
                                             target = 'en',
                                             source = source).execute()

    return (source, translated['translations'][0]['translatedText'])

