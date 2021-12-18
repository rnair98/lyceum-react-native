'''
This returns a list of courses from classcentral from page 1.

'''

from bs4 import BeautifulSoup
import requests
import sys


def get_courses(search_query: str = "")->dict:
    """
    Return a list of courses from classcentral from page 1 based on search query.
    """
    course_dict = {}

    if ' ' in search_query:
        search_query = search_query.replace(' ', '+')

    html_text = requests.get("https://www.classcentral.com/search?q={}&sort=&free=true".format(search_query)).content
    soup = BeautifulSoup(html_text, 'html.parser')

    element = soup.find('li', class_="bg-white border-all border-gray-light padding-xsmall radius-small margin-bottom-small medium-up-padding-horz-large medium-up-padding-vert-medium course-list-course")
    titles = soup.find_all('h2',class_="text-1 weight-semi line-tight margin-bottom-xxsmall")
    descriptions = soup.find_all('p',class_="text-2 margin-bottom-xsmall")
    providers = soup.find_all('a', {"aria-label": "Provider"})
    effort = soup.find_all('span', {"aria-label": "Workload and duration"})
    time = soup.find_all('span', {"aria-label": "Start date"})

    for title in titles:
        course_dict[title.text.strip(" \n")] = {"description": descriptions[titles.index(title)].text.strip(" \n"),
                                                "provider": providers[titles.index(title)].text.strip(" \n"),
                                                "effort": effort[titles.index(title)].text.strip(" \n"),
                                                "time": time[titles.index(title)].text.strip(" \n")}

    return course_dict


if __name__ == "__main__":
    if len(sys.argv) > 1:
        search_query = sys.argv[1]
    else:
        search_query = "computer+science"

    courses = get_courses(search_query)
    print(courses)
    