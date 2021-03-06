
"""
Blueprints to be registered and initialized should be imported here and added to BLUEPRINTS
"""

from adsabs.modules import (search, user, api, abs, index, dynamicjs, 
                            feedback, bibutils, recommender, pages, 
                            redirect, export, visualization, buggyme, adsgut, autocomplete)

BLUEPRINTS = [index, user, search, api, abs, dynamicjs, feedback, bibutils, recommender, pages, redirect, 
              export, visualization, buggyme, adsgut, autocomplete]

try:
    from adsabs.modules import searchcompare
    BLUEPRINTS.append(searchcompare)
except ImportError:
    pass
